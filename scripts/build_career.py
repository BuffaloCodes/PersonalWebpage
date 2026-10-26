#!/usr/bin/env python3
"""Build the career outputs for piercewallar.com from data/career.json.

Usage (from the repository root):   python scripts/build_career.py
Windows alternative:                py scripts/build_career.py

Reads:   data/career.json            (the single source of truth; edit this file)
Writes:  js/experience-data.js       (the Experience page data)
         data/career-facts.md        (a Career Facts table you can paste into a document)
         data/jsonld-person.html     (the structured-data block, for reference)
Updates: index.html                  (only the text between the career-jsonld markers, if present)

Python 3.8 or newer, standard library only. Nothing here runs on the live site;
the outputs are committed files, so the site itself still has no build step.
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "data" / "career.json"
MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
errors, warnings = [], []


def fmt(d):
    return "%s %d" % (MONTHS[d[1] - 1], d[0])


def mi(d):
    return d[0] * 12 + d[1] - 1


def span(e):
    if e.get("dates"):
        return e["dates"]
    if e.get("kind") == "event":
        return fmt(e["date"])
    end = "Present" if e["end"] == "present" else fmt(e["end"])
    return "%s – %s" % (fmt(e["start"]), end)


def validate(data):
    seen = set()
    for e in data["entries"]:
        i = e.get("id", "?")
        if i in seen:
            errors.append("Duplicate id: " + i)
        seen.add(i)
        for k in ("id", "group", "label", "org", "role", "summary", "bullets", "skills"):
            if k not in e:
                errors.append("%s: missing field '%s'" % (i, k))
        if e.get("kind") != "event":
            if "start" not in e or "end" not in e:
                errors.append("%s: needs start and end" % i)
                continue
            if e["end"] != "present" and mi(e["end"]) < mi(e["start"]):
                errors.append("%s: end is before start" % i)
        segs = e.get("segments", [])
        if segs:
            if segs[0]["start"] != e["start"]:
                errors.append("%s: first segment must start when the entry starts" % i)
            if segs[-1]["end"] != e["end"]:
                errors.append("%s: last segment must end when the entry ends" % i)
            for a, b in zip(segs, segs[1:]):
                if a["end"] != b["start"]:
                    errors.append("%s: segments '%s' and '%s' do not meet" % (i, a["name"], b["name"]))


def public_entries(data):
    out = []
    for e in data["entries"]:
        c = {k: v for k, v in e.items() if k not in ("todo", "docs", "docs_note")}
        if "segments" in c:
            segs = []
            for s in c["segments"]:
                s2 = {k: v for k, v in s.items() if k != "todo"}
                # Put the derived date range right after 'end', where it used to sit.
                ordered = {}
                for k, v in s2.items():
                    ordered[k] = v
                    if k == "end":
                        ordered["years"] = "%s – %s" % (fmt(s["start"]), fmt(s["end"]))
                segs.append(ordered)
            c["segments"] = segs
        out.append(c)
    return out


def write_experience_js(data):
    body = json.dumps(public_entries(data), indent=2, ensure_ascii=True)
    body = re.sub(r"\[\s+(\d+),\s+(\d+)\s+\]", r"[\1, \2]", body)  # keep [year, month] on one line
    text = (
        "/* GENERATED FILE. Do not edit by hand.\n"
        "   Edit data/career.json, then run:  python scripts/build_career.py\n"
        "   Built from career.json (last updated %s). */\n"
        "window.EXPERIENCE_ENTRIES = %s;\n" % (data["updated"], body)
    )
    (ROOT / "js" / "experience-data.js").write_text(text, encoding="utf-8")
    return text


def write_facts(data):
    rows = ["# Career Facts (generated from data/career.json, updated %s)" % data["updated"], "",
            "| Employer or institution | Title | Dates | Resume | CV | Site |", "|---|---|---|---|---|---|"]
    yn = lambda b: "yes" if b else "no"
    for e in data["entries"]:
        d = e["docs"]
        if e.get("segments"):
            rows.append("| %s | (all roles below) | %s | %s | %s | %s |" % (e["org"], span(e), yn(d["resume"]), yn(d["cv"]), yn(d["site"])))
            for s in reversed(e["segments"]):
                rows.append("| &nbsp;&nbsp;%s | %s | %s \u2013 %s | | | |" % (s["place"], s["name"].replace(" | ", " \u2014 "), fmt(s["start"]), fmt(s["end"])))
        else:
            rows.append("| %s | %s | %s | %s | %s | %s |" % (e["org"], e["role"], span(e), yn(d["resume"]), yn(d["cv"]), yn(d["site"])))
    c = data["conventions"]
    rows += ["", "## Standards"] + ["- **%s**: %s" % (k.replace("_", " "), v if isinstance(v, str) else "; ".join(v)) for k, v in c.items()]
    p, k = data["person"], data["contact"]
    rows += ["", "## Contact", "%s | %s | %s | %s | %s" % (p["document_header"], k["email"], k["phone"], k["linkedin"], k["site"])]
    text = "\n".join(rows) + "\n"
    (ROOT / "data" / "career-facts.md").write_text(text, encoding="utf-8")
    return text


def jsonld(data):
    p, k, j = data["person"], data["contact"], data["jsonld"]
    site = k["site"]
    person = {
        "@type": "Person", "@id": site + "#person",
        "name": p["name"], "givenName": p["given"], "additionalName": p["middle"], "familyName": p["family"],
        "honorificSuffix": p["suffix"], "url": site, "image": site + "assets/images/headshot.jpg",
        "jobTitle": j["job_title"], "description": j["description"],
        "worksFor": [dict({"@type": "Organization"}, name=j["organizations"][i]["name"], url=j["organizations"][i]["url"]) for i in j["works_for_ids"]],
        "alumniOf": [{"@type": "CollegeOrUniversity", "name": a["name"], "url": a["url"]} for a in j["alumni_of"]],
        "hasCredential": [{"@type": "EducationalOccupationalCredential", "name": c["name"], "credentialCategory": "certification",
                           "recognizedBy": {"@type": "Organization", "name": c["issuer"], "url": c["issuer_url"]}} for c in j["credentials"]],
        "address": {"@type": "PostalAddress", "addressLocality": p["city"], "addressRegion": p["region"], "addressCountry": p["country"]},
        "sameAs": [k["linkedin"], k["github"]],
    }
    website = {"@type": "WebSite", "@id": site + "#website", "url": site, "name": p["name"], "publisher": {"@id": site + "#person"}}
    graph = {"@context": "https://schema.org", "@graph": [website, person]}
    return ('<script type="application/ld+json">\n' + json.dumps(graph, indent=2, ensure_ascii=False) + "\n</script>")


def inject_jsonld(block):
    (ROOT / "data" / "jsonld-person.html").write_text(block + "\n", encoding="utf-8")
    page = ROOT / "index.html"
    if not page.exists():
        warnings.append("index.html not found; wrote data/jsonld-person.html only")
        return
    html = page.read_text(encoding="utf-8")
    pat = re.compile(r"(<!-- BEGIN:career-jsonld -->)(.*?)(<!-- END:career-jsonld -->)", re.S)
    if not pat.search(html):
        warnings.append("index.html has no career-jsonld markers yet; paste the block from data/jsonld-person.html once")
        return
    new = pat.sub(lambda m: m.group(1) + "\n" + block + "\n  " + m.group(3), html)
    if new != html:
        page.write_text(new, encoding="utf-8")
        print("Updated JSON-LD in index.html")
    else:
        print("JSON-LD in index.html already current")


def scan_banned(data, texts):
    for s in data["banned_strings"]:
        for name, t in texts.items():
            if s in t:
                errors.append("Banned string %r found in %s" % (s, name))


def main():
    data = json.loads(SRC.read_text(encoding="utf-8"))
    validate(data)
    if errors:
        print("\nFix these in data/career.json first:")
        print("\n".join(" - " + m for m in errors))
        sys.exit(1)
    js = write_experience_js(data)
    facts = write_facts(data)
    block = jsonld(data)
    # The Standards section of the facts file quotes banned words on purpose, so scan only the table.
    scan_banned(data, {"js/experience-data.js": js, "data/career-facts.md (table)": facts.split("## Standards")[0], "JSON-LD": block})
    inject_jsonld(block)
    todo = sum(1 for e in data["entries"] if e.get("todo")) + sum(1 for e in data["entries"] for s in e.get("segments", []) if s.get("todo"))
    print("Built %d entries. Open EDIT: items in career.json: %d." % (len(data["entries"]), todo))
    for w in warnings:
        print("Note:", w)
    if errors:
        print("\nProblems:")
        print("\n".join(" - " + m for m in errors))
        sys.exit(1)
    print("OK")


if __name__ == "__main__":
    main()