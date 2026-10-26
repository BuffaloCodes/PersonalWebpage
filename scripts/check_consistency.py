#!/usr/bin/env python3
"""Consistency check for piercewallar.com (idea A7, version 1).

Compares data/career.json (the single source of truth) against everything that should match it,
and prints a short pass/fail report.

Usage (from the repository root):
    python scripts/check_consistency.py
    python scripts/check_consistency.py --resume "D:\\private\\Resume.docx" --cv "D:\\private\\CV.docx"
    python scripts/check_consistency.py --linkedin "D:\\private\\Positions.csv"
    python scripts/check_consistency.py --out report.txt        (also saves the report; do not commit it)

What it checks
  1. Site pages:  banned strings (client names, "Sept", GPA, placeholders, old metadata names), no phone number
                  on any page, the footer email matches career.json, open EDIT: comments (info only).
  2. Generated files:  rebuilds the outputs in a temporary copy and confirms the committed
                  js/experience-data.js, data/career-facts.md, data/jsonld-person.html and index.html are current.
  3. Documents:   the Resume and CV (.docx or .pdf): header name, contact details, each entry's employer,
                  dates and title, entries that must be absent, banned strings, and file properties
                  (Title and Author). Files default to assets/resume and assets/cv (PDFs). Give the .docx
                  files with --resume and --cv; keep them in a private folder, not in the repository.
  4. LinkedIn:    optional, from LinkedIn's "Get a copy of your data" export (Positions.csv). Experimental.

Python 3.8 or newer, standard library only. PDF text needs the free `pdftotext` and `pdfinfo` tools
(Poppler); without them PDF checks are skipped and the report says so.
Exit code: 0 when nothing failed, 1 when at least one check failed.
"""
import argparse, csv, json, re, shutil, subprocess, sys, tempfile, zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parent.parent
MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
results = []  # (level, area, message)


def add(level, area, msg):
    results.append((level, area, msg))


def fmt(d):
    return "%s %d" % (MONTHS[d[1] - 1], d[0])


def span(e):
    if e.get("dates"):
        return e["dates"]
    if e.get("kind") == "event":
        return fmt(e["date"])
    return "%s – %s" % (fmt(e["start"]), "Present" if e["end"] == "present" else fmt(e["end"]))


def seg_span(s):
    return "%s – %s" % (fmt(s["start"]), "Present" if s["end"] == "present" else fmt(s["end"]))


def norm(t):
    t = t.replace("\u00a0", " ").replace("—", "–").replace("--", "–").replace("\u2019", "'").replace("\u2018", "'")
    t = t.replace("\u201c", '"').replace("\u201d", '"')
    t = t.replace(" & ", " and ")
    return re.sub(r"\s+", " ", t)


# ---------------------------------------------------------------- text extraction
def docx_text(path):
    with zipfile.ZipFile(path) as z:
        root = ET.fromstring(z.read("word/document.xml"))
        paras = []
        for p in root.iter(W + "p"):
            parts = []
            for el in p.iter():
                if el.tag == W + "t" and el.text:
                    parts.append(el.text)
                elif el.tag == W + "tab":
                    parts.append(" ")
            paras.append("".join(parts))
        props = ""
        for name in ("docProps/core.xml", "docProps/app.xml"):
            if name in z.namelist():
                props += z.read(name).decode("utf-8", "replace")
    return "\n".join(paras), props


def docx_props(xml):
    def tag(name):
        m = re.search(r"<(?:dc|cp):%s>([^<]*)<" % name, xml)
        return m.group(1) if m else ""
    return tag("title"), tag("creator")


def pdf_text(path):
    if not (shutil.which("pdftotext") and shutil.which("pdfinfo")):
        return None, None
    txt = subprocess.run(["pdftotext", "-layout", str(path), "-"], capture_output=True, text=True, encoding="utf-8", errors="replace").stdout
    info = subprocess.run(["pdfinfo", str(path)], capture_output=True, text=True, encoding="utf-8", errors="replace").stdout
    return txt, info


# ---------------------------------------------------------------- 1. site pages
def check_site(data, banned):
    area = "Site pages"
    pages = sorted(ROOT.glob("*.html"))
    phone = data["contact"]["phone"]
    email = data["contact"]["email"]
    bad = 0
    edits = 0
    for p in pages:
        t = p.read_text(encoding="utf-8", errors="replace")
        for b in banned:
            if b in t:
                add("FAIL", area, "%s contains banned text %r" % (p.name, b.strip())); bad += 1
        for pat in ("Lorem ipsum", "lorem ipsum"):
            if pat in t:
                add("FAIL", area, "%s contains lorem ipsum" % p.name); bad += 1
        if phone in t:
            add("FAIL", area, "%s shows the phone number (the site keeps it off by design)" % p.name); bad += 1
        mailtos = set(re.findall(r"mailto:([^\"'?\s>]+)", t))
        for m in mailtos:
            if m.lower() != email.lower():
                add("FAIL", area, "%s links mailto:%s, expected %s" % (p.name, m, email)); bad += 1
        edits += len(re.findall(r"EDIT:", t))
    js = ROOT / "js" / "experience-data.js"
    if js.exists():
        t = js.read_text(encoding="utf-8")
        for b in banned:
            if b in t:
                add("FAIL", area, "js/experience-data.js contains banned text %r" % b.strip()); bad += 1
    if not bad:
        add("PASS", area, "%d pages and the Experience data: no banned text, no phone number, email links match" % len(pages))
    add("INFO", area, "%d open EDIT: comments across the HTML pages (tracked in TASKS.md)" % edits)


# ---------------------------------------------------------------- 2. generated files are current
def check_generated():
    area = "Generated files"
    files = ["js/experience-data.js", "data/career-facts.md", "data/jsonld-person.html", "index.html"]
    tmp = Path(tempfile.mkdtemp(prefix="career-check-"))
    try:
        (tmp / "scripts").mkdir(); (tmp / "data").mkdir(); (tmp / "js").mkdir()
        shutil.copy(ROOT / "scripts" / "build_career.py", tmp / "scripts")
        shutil.copy(ROOT / "data" / "career.json", tmp / "data")
        for f in files:
            src = ROOT / f
            if src.exists():
                (tmp / f).parent.mkdir(parents=True, exist_ok=True)
                shutil.copy(src, tmp / f)
        r = subprocess.run([sys.executable, str(tmp / "scripts" / "build_career.py")], capture_output=True, text=True, encoding="utf-8", errors="replace")
        if r.returncode != 0:
            add("FAIL", area, "build_career.py failed: " + (r.stdout + r.stderr).strip().splitlines()[-1][:150]); return
        stale = []
        for f in files:
            a = (ROOT / f).read_text(encoding="utf-8", errors="replace").replace("\r\n", "\n") if (ROOT / f).exists() else None
            b = (tmp / f).read_text(encoding="utf-8", errors="replace").replace("\r\n", "\n") if (tmp / f).exists() else None
            if a != b:
                stale.append(f)
        if stale:
            add("FAIL", area, "out of date versus career.json (run python scripts/build_career.py and commit): " + ", ".join(stale))
        else:
            add("PASS", area, "all four generated files match a fresh build from career.json")
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


# ---------------------------------------------------------------- 3. documents
def check_document(kind, label, text, props_title, props_author, props_raw, data, banned):
    area = "%s (%s)" % (kind.upper() if kind == "cv" else "Resume", label)
    t = norm(text)
    fails = 0

    def need(cond, msg):
        nonlocal fails
        if not cond:
            add("FAIL", area, msg); fails += 1

    p, c = data["person"], data["contact"]
    need(norm(p["document_header"]) in t, "header should read %r" % p["document_header"])
    need(c["email"] in t, "email %s missing" % c["email"])
    need(c["phone"] in t, "phone %s missing" % c["phone"])
    need("linkedin.com/in/pierce-wallar" in t, "LinkedIn address missing")
    need("piercewallar.com" in t, "site address missing")
    for b in banned:
        need(norm(b) not in t, "contains banned text %r" % b.strip())
    for pat in ("Lorem", "TODO", "EDIT:", "[Placeholder"):
        need(pat not in text, "contains %r" % pat)
    need("Newmark" in t, "employer Newmark missing")
    for e in data["entries"]:
        flag = e.get("docs", {}).get(kind)
        org = norm(e["org"])
        if flag is False:
            need(org not in t, "should not include %s (docs.%s is false)" % (e["org"], kind))
            continue
        if not flag:
            continue
        need(org in t, "missing entry: %s" % e["org"])
        if org not in t:
            continue
        if e.get("kind") == "event":
            need(norm(span(e)) in t, "%s: date %s not found" % (e["org"], span(e)))
            continue
        full = norm(span(e))
        if e["group"] == "edu":
            end = full.split(" – ")[-1]
            need(full in t or end in t, "%s: expected %s or just %s" % (e["org"], full, end))
        else:
            need(full in t, "%s: dates %s not found" % (e["org"], full))
            role = norm(e["role"])
            if not e.get("segments"):
                need(role in t, "%s: title %r not found" % (e["org"], e["role"]))
        if kind == "cv":
            for s in e.get("segments", []):
                head = norm(s["name"].split(" | ")[0])
                need(head in t, "%s: role %r not found" % (e["org"], head))
                need(norm(seg_span(s)) in t, "%s: %s dates %s not found" % (e["org"], head, seg_span(s)))
    if props_title is not None:
        need("Pierce Wallar" in props_title, "file Title is %r, expected it to include Pierce Wallar" % props_title)
        need("Pierce Wallar" in props_author, "file Author is %r, expected Pierce Wallar" % props_author)
        for b in banned:
            need(b.strip() not in props_raw, "file properties contain banned text %r" % b.strip())
    if not fails:
        add("PASS", area, "header, contact, entries, dates, exclusions, banned text and file properties all match")


def check_docs(args, data, banned):
    jobs = []
    for kind, given, folder in (("resume", args.resume, "assets/resume"), ("cv", args.cv, "assets/cv")):
        if given:
            jobs.append((kind, Path(given)))
        else:
            for f in sorted((ROOT / folder).glob("*.pdf")):
                jobs.append((kind, f))
    if not jobs:
        add("SKIP", "Documents", "no Resume or CV files found")
    for kind, path in jobs:
        if not path.exists():
            add("FAIL", "Documents", "file not found: %s" % path); continue
        if path.suffix.lower() == ".docx":
            text, props = docx_text(path)
            title, author = docx_props(props)
            check_document(kind, path.name, text, title, author, props, data, banned)
        elif path.suffix.lower() == ".pdf":
            text, info = pdf_text(path)
            if text is None:
                add("SKIP", "Documents", "%s: pdftotext/pdfinfo not installed, PDF not checked" % path.name); continue
            title = (re.search(r"^Title:\s*(.*)$", info, re.M) or [None, ""])[1]
            author = (re.search(r"^Author:\s*(.*)$", info, re.M) or [None, ""])[1]
            check_document(kind, path.name, text, title, author, info, data, banned)
        else:
            add("SKIP", "Documents", "%s: unsupported file type" % path.name)


# ---------------------------------------------------------------- 4. LinkedIn (experimental)
def check_linkedin(path, data):
    area = "LinkedIn"
    p = Path(path)
    if not p.exists():
        add("FAIL", area, "file not found: %s" % p); return
    with p.open(encoding="utf-8-sig", newline="") as fh:
        rows = list(csv.DictReader(fh))
    if not rows or "Company Name" not in rows[0]:
        add("FAIL", area, "does not look like Positions.csv (no 'Company Name' column)"); return
    fails = 0
    for r in rows:
        blob = " ".join(str(v) for v in r.values())
        for b in ("Newmark RF", "Sept "):
            if b in blob:
                add("FAIL", area, "%s: contains %r" % (r.get("Company Name"), b.strip())); fails += 1

    def key(s):
        s = (s or "").strip()
        return s if s else "Present"
    for e in data["entries"]:
        if e["group"] != "work" or not e.get("docs", {}).get("site"):
            continue
        org = norm(e["org"]).lower().replace("u.s. ", "")
        mine = [r for r in rows if org.split(",")[0] in norm(r.get("Company Name", "")).lower()]
        if not mine:
            add("FAIL", area, "no LinkedIn position found for %s" % e["org"]); fails += 1; continue
        have = {(key(r.get("Started On")), key(r.get("Finished On"))) for r in mine}
        wants = [(fmt(s["start"]), "Present" if s["end"] == "present" else fmt(s["end"])) for s in e.get("segments", [])] or \
                [(fmt(e["start"]), "Present" if e["end"] == "present" else fmt(e["end"]))]
        for w in wants:
            if w not in have:
                add("FAIL", area, "%s: expected %s – %s; LinkedIn has %s" % (e["org"], w[0], w[1], sorted(have))); fails += 1
    if not fails:
        add("PASS", area, "every site position is on LinkedIn with matching dates (experimental check)")


# ---------------------------------------------------------------- main
def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--resume", help="path to the Resume .docx or .pdf (default: PDFs in assets/resume)")
    ap.add_argument("--cv", help="path to the CV .docx or .pdf (default: PDFs in assets/cv)")
    ap.add_argument("--linkedin", help="path to LinkedIn's Positions.csv")
    ap.add_argument("--out", help="also save the report to this file")
    args = ap.parse_args()
    data = json.loads((ROOT / "data" / "career.json").read_text(encoding="utf-8"))
    banned = data["banned_strings"]
    check_site(data, banned)
    check_generated()
    check_docs(args, data, banned)
    if args.linkedin:
        check_linkedin(args.linkedin, data)
    else:
        add("SKIP", "LinkedIn", "no Positions.csv given (use --linkedin)")

    lines = ["CONSISTENCY REPORT: piercewallar.com", "=" * 60]
    areas = []
    for _, a, _ in results:
        if a not in areas:
            areas.append(a)
    for a in areas:
        lines.append(a)
        for lvl, aa, msg in results:
            if aa == a:
                lines.append("  %-4s %s" % (lvl, msg))
    n = {k: sum(1 for r in results if r[0] == k) for k in ("PASS", "FAIL", "SKIP", "INFO")}
    lines += ["=" * 60, "RESULT: %s  (%d passed, %d failed, %d skipped)" % ("FAIL" if n["FAIL"] else "PASS", n["PASS"], n["FAIL"], n["SKIP"])]
    report = "\n".join(lines)
    print(report)
    if args.out:
        Path(args.out).write_text(report + "\n", encoding="utf-8")
    sys.exit(1 if n["FAIL"] else 0)


if __name__ == "__main__":
    main()
