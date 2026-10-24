/* Experience page: draws the shared-axis timeline and fills the detail panel.

   HOW TO EDIT
   - Everything on the page comes from the ENTRIES list below. Change a date and the bar moves.
   - Dates are [year, month]. The end month counts as part of the role. Use end: "present" for a current role.
   - Search this file for "EDIT:" to find the text you still want to refine.
   - DEFAULT_ID is the entry shown when the page first opens. A link such as experience.html#army overrides it. */
(function () {
  "use strict";

  var DEFAULT_ID = "newmark"; // EDIT: change to any id below (ready3, newmark, green-tree, boomtown, gordian, army, univar, ucof, mst, pmp, ou)

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var ENTRIES = [
    /* ---------- Professional experience: most recent first ---------- */
    {
      id: "ready3", group: "work", label: "Ready 3, LLC",
      org: "Ready 3, LLC", role: "Aerospace Engineering Intern", place: "Oklahoma City, OK",
      start: [2026, 10], end: "present",
      summary: "An internship with an Oklahoma City defense contractor, applying engineering and project management training to complex aerospace programs.",
      bullets: [
        // EDIT: keep this general; add only what Ready 3 is comfortable with you sharing publicly.
        "Contribute to engineering and program work alongside the team, with attention to schedule, scope, and the information leaders need to make decisions.",
        "Bring Army engineering leadership, graduate work in geological engineering, and PMP training to programs with tight accountability for schedule and cost.",
        "Learn how requirements, budgets, and customer expectations pull on the same program from inside a contractor."
      ],
      skills: ["Program management", "Aerospace and defense", "Schedule and scope control", "Engineering"],
      links: [{ href: "project-ready3.html", label: "Read the project write-up" }]
    },
    {
      id: "newmark", group: "work", label: "Newmark RF",
      org: "Newmark RF", role: "Management Consulting Intern", place: "Real estate management consulting",
      start: [2026, 5], end: [2026, 8],
      summary: "Management consulting work in real estate, where the quality of the underlying data decided whether anything built on it could be trusted.",
      bullets: [
        // EDIT: keep client details general; confirm anything Newmark prefers not to be described.
        "Took responsibility for cleaning up a client's Master Entity List, standardizing roughly 550 real estate entities into a consistent five-digit ID scheme and verifying it against the client's hierarchy diagram.",
        "Traced numbers stored as text that were breaking lookup formulas across thousands of rows, corrected the cause systematically, and documented four quality issues for the team to resolve with the client.",
        "Built a UAT and DCT testing progress tracker for a client deliverable, with status roll-ups, donut and stacked bar charts, and a one-click refresh."
      ],
      skills: ["Excel (XLOOKUP, formulas, VBA)", "Data quality", "Data visualization", "Client communication"],
      links: [{ href: "project-newmark.html", label: "Read the project write-up" }]
    },
    {
      id: "green-tree", group: "work", label: "Green Tree Risk Group",
      org: "Green Tree Risk Group", role: "COO & Co-Founder", place: "Insurtech start-up",
      start: [2026, 1], end: [2026, 5],
      summary: "Early-stage groundwork for an insurtech company built around AI liability and cyber insurance: a managing general agent (MGA) platform paired with AI governance software.",
      bullets: [
        "Coordinated weekly customer discovery interview rounds across a team of six, with more than ten interviews grounding the Business Model Canvas.",
        "Built the six-year financial model from scratch, including partnership structures, a detailed expense build, and a balanced balance sheet, with cell-level source notes for every assumption.",
        "Developed a valuation approach based on public market multiples that values the underwriting and software businesses separately and then combines them.",
        "Led work on market sizing, pricing benchmarks, and the company's name and brand identity, and produced a pitch deck and brand guidelines."
      ],
      // EDIT: confirm you are comfortable with this status line, or reword it.
      note: "Status: groundwork concluded in May 2026, when the founding team moved on to other pursuits.",
      skills: ["Customer discovery", "Financial modeling", "Valuation", "Go-to-market strategy", "Insurtech"],
      links: [{ href: "project-green-tree.html", label: "Read the project write-up" }]
    },
    {
      id: "boomtown", group: "work", label: "BoomTown Home Services",
      org: "BoomTown Home Services", role: "Founder", place: "Oklahoma City metro",
      start: [2024, 7], end: "present",
      summary: "A veteran-owned home services company serving the Oklahoma City metro, founded shortly after leaving the Army.",
      bullets: [
        // EDIT: add specifics such as service lines, crew size, customers served, and tools you use.
        "Work across every part of a small business: the services offered, how jobs are scheduled and delivered, customer communication, invoicing, and marketing.",
        "Price against real costs, manage cash flow in a seasonal business, and build repeatable processes so quality does not depend on any one person."
      ],
      skills: ["Operations", "Pricing and cash flow", "Process design", "Customer service", "Marketing"],
      links: [
        { href: "project-boomtown.html", label: "Read the project write-up" },
        { href: "https://www.boomtownservice.com", label: "Visit BoomTown Home Services", external: true }
      ]
    },
    {
      id: "gordian", group: "work", label: "Gordian",
      org: "Gordian", role: "Capital Planning Consultant", place: "Denver metro",
      start: [2024, 1], end: [2025, 6],
      summary: "Capital planning consulting focused on facility assessments and portfolio analysis for clients across sectors.",
      bullets: [
        // EDIT: add outcomes, portfolio sizes, or client types you can share.
        "Led multi-site facility assessments and portfolio analysis across sectors.",
        "Coordinated schedules, quality assurance, and stakeholder reviews.",
        "Delivered outputs that informed executive decisions."
      ],
      skills: ["Capital planning", "Facility assessments", "Portfolio analysis", "Stakeholder management", "Quality assurance"],
      links: []
    },
    {
      id: "army", group: "work", label: "U.S. Army",
      org: "U.S. Army", role: "Engineer Officer", place: "Fort Lewis and Fort Carson",
      start: [2017, 9], end: [2024, 1],
      summary: "Six years as an Army engineer officer, from leading a platoon to managing facilities to running battalion logistics.",
      /* EDIT: when you are ready, replace the months in each segment below (and the "years" text shown on the page).
         The chart uses these start and end months to size the three shades inside the Army bar. */
      segments: [
        { name: "Platoon Leader", place: "Fort Lewis, WA", start: [2017, 9], end: [2020, 6], years: "2017 – 2020", shade: "seg1",
          text: "Led a platoon, synchronizing operations, personnel, and resources and improving reporting and execution discipline." /* EDIT: confirm and add specifics */ },
        { name: "Facilities Manager", place: "Fort Lewis, WA", start: [2020, 6], end: [2022, 11], years: "2020 – 2022", shade: "seg2",
          text: "Managed facilities and infrastructure work, coordinating with partners on schedule and safety." /* EDIT: confirm and add specifics */ },
        { name: "Battalion Logistics Officer", place: "Fort Carson, CO", start: [2022, 11], end: [2024, 1], years: "2022 – 2024", shade: "seg3",
          text: "Oversaw supply and readiness in support of operations and designed processes for movement control and sustainment." /* EDIT: confirm and add specifics */ }
      ],
      bullets: [],
      skills: ["Leadership", "Logistics", "Facilities management", "Operations", "Project management"],
      links: []
    },
    {
      id: "univar", group: "work", label: "Univar Solutions",
      org: "Univar Solutions", role: "Environment, Health and Safety Manager", place: "Houston, TX",
      start: [2016, 5], end: [2017, 9],
      summary: "First professional role after college, in environment, health, and safety for a chemical distribution operation.",
      bullets: [
        // EDIT: add specifics, such as programs you ran or results you can quantify.
        "Managed environment, health, and safety responsibilities for operations in Houston.",
        "Supported day-to-day operations and customer delivery."
      ],
      skills: ["EHS compliance", "Safety management", "Operations"],
      links: []
    },

    /* ---------- Education: oldest first, so the most recent is at the bottom ---------- */
    {
      id: "ucof", group: "edu", label: "University of Central Oklahoma", shortRole: "B.S., Occupational Safety and Health",
      org: "University of Central Oklahoma", role: "B.S., Occupational Safety and Health Technology", place: "Edmond, OK",
      start: [2011, 8], end: [2016, 5],
      summary: "Undergraduate degree in occupational safety and health, the foundation for an early career in environment, health, and safety.",
      bullets: [
        // EDIT: add honors, activities, or coursework worth naming.
        "Coursework in construction management and related fields."
      ],
      skills: ["Occupational safety", "Construction management"],
      links: []
    },
    {
      id: "mst", group: "edu", label: "Missouri S&T", shortRole: "M.S., Geological/Geophysical Engineering",
      org: "Missouri University of Science and Technology", role: "M.S., Geological/Geophysical Engineering", place: "Rolla, MO",
      start: [2022, 1], end: [2022, 12],
      summary: "Graduate degree in geological and geophysical engineering, completed in a single year while serving on active duty.",
      bullets: [
        // EDIT: add thesis, project, or coursework highlights.
        "Completed graduate coursework while serving on active duty."
      ],
      skills: ["Geological engineering", "Geophysics", "Technical analysis"],
      links: []
    },
    {
      id: "pmp", group: "edu", kind: "event", label: "Project Management Professional (PMP)", shortRole: "Certified · Sep 2022",
      org: "Project Management Professional (PMP)", role: "Project Management Institute certification", place: "",
      date: [2022, 9], dates: "Sep 2022",
      summary: "Completed a six-week PMP preparation course in June 2022, then studied for and earned the certification in September 2022.",
      bullets: [],
      skills: ["Project management", "Schedule and cost control", "Risk management"],
      links: []
    },
    {
      id: "ou", group: "edu", label: "University of Oklahoma", shortRole: "MBA, Entrepreneurship focus",
      org: "University of Oklahoma", role: "MBA, Entrepreneurship focus · Price College of Business", place: "Norman, OK",
      start: [2025, 8], end: [2027, 5],
      summary: "Full-time MBA at the Gene Rainbolt Graduate School of Business with an entrepreneurship focus, paired with hands-on ventures and consulting internships.",
      bullets: [
        // EDIT: add honors, leadership roles, or case competitions.
        "Applying coursework directly through BoomTown Home Services, Green Tree Risk Group, and consulting internships."
      ],
      skills: ["Entrepreneurship", "Strategy", "Financial modeling"],
      links: []
    }
  ];

  /* =========================================================
     Everything below draws the page. Normally no edits needed.
     ========================================================= */

  var chart = document.getElementById("xpChart");
  var panel = document.getElementById("xpDetail");
  if (!chart || !panel) return;

  var mobileQuery = window.matchMedia("(max-width: 820px)");
  var homeParent = panel.parentNode;
  var homeNext = panel.nextSibling;

  function mi(d) { return d[0] * 12 + (d[1] - 1); }
  function fmt(d) { return MONTHS[d[1] - 1] + " " + d[0]; }

  var today = new Date();
  var dim = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  var nowV = today.getFullYear() * 12 + today.getMonth() + (today.getDate() - 0.5) / dim;

  function startV(e) { return e.kind === "event" ? mi(e.date) + 0.5 : mi(e.start); }
  function endV(e) {
    if (e.kind === "event") return mi(e.date) + 0.5;
    return e.end === "present" ? nowV : mi(e.end) + 1;
  }
  function isProjected(e) { return e.kind !== "event" && e.end !== "present" && endV(e) > nowV; }
  function datesText(e) {
    if (e.dates) return e.dates;
    return fmt(e.start) + " – " + (e.end === "present" ? "Present" : fmt(e.end)) + (isProjected(e) ? " (projected)" : "");
  }

  var axisStart = Infinity, axisEnd = nowV + 1;
  ENTRIES.forEach(function (e) {
    axisStart = Math.min(axisStart, startV(e));
    axisEnd = Math.max(axisEnd, endV(e));
  });
  axisEnd = Math.ceil(axisEnd);
  function pct(v) { return ((v - axisStart) / (axisEnd - axisStart)) * 100; }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function place(node, from, to) {
    node.style.left = pct(from) + "%";
    node.style.width = (pct(to) - pct(from)) + "%";
    return node;
  }

  var byId = {};
  var rowsById = {};
  var rowList = [];
  var currentId = null;

  /* ---- Plot layer: year gridlines, overlap bands, today line ---- */
  var plot = el("div", "xp-plot");
  plot.setAttribute("aria-hidden", "true");

  var firstYear = Math.ceil(axisStart / 12);
  for (var y = firstYear; y * 12 < axisEnd; y++) {
    var gx = pct(y * 12);
    var g = el("div", "xp-grid"); g.style.left = gx + "%"; plot.appendChild(g);
    var yl = el("div", "xp-year" + ((y - firstYear) % 2 ? " minor" : ""), String(y));
    yl.style.left = gx + "%"; plot.appendChild(yl);
  }

  // Bands where a degree overlapped any paid role
  var work = ENTRIES.filter(function (e) { return e.group === "work"; })
    .map(function (e) { return [startV(e), Math.min(endV(e), nowV)]; })
    .filter(function (r) { return r[1] > r[0]; })
    .sort(function (a, b) { return a[0] - b[0]; });
  var merged = [];
  work.forEach(function (r) {
    var last = merged[merged.length - 1];
    if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]); else merged.push([r[0], r[1]]);
  });
  ENTRIES.filter(function (e) { return e.group === "edu" && e.kind !== "event"; }).forEach(function (e) {
    merged.forEach(function (w) {
      var s = Math.max(startV(e), w[0]), t = Math.min(endV(e), w[1]);
      if (t - s >= 2) plot.appendChild(place(el("div", "xp-band"), s, t));
    });
  });

  var todayLine = el("div", "xp-today"); todayLine.style.left = pct(nowV) + "%"; plot.appendChild(todayLine);
  var todayLabel = el("div", "xp-today-label", "Today"); todayLabel.style.left = pct(nowV) + "%"; plot.appendChild(todayLabel);

  chart.appendChild(plot);
  chart.appendChild(el("div", "xp-axis-space"));

  /* ---- Rows ---- */
  function addGroup(cls, text) { chart.appendChild(el("h2", "xp-group " + cls, text)); }

  function buildRow(e) {
    byId[e.id] = e;
    var row = el("button", "xp-row");
    row.type = "button";
    row.setAttribute("data-id", e.id);
    row.setAttribute("data-selected", "false");
    row.setAttribute("aria-controls", "xpDetail");

    var label = el("span", "xp-label");
    label.appendChild(el("span", "xp-org", e.label || e.org));
    label.appendChild(el("span", "xp-sub", (e.shortRole || e.role) + (e.kind === "event" ? "" : " · " + datesText(e))));
    row.appendChild(label);

    var track = el("span", "xp-track");
    track.setAttribute("aria-hidden", "true");
    if (e.kind === "event") {
      var ev = el("span", "xp-event"); ev.style.left = pct(startV(e)) + "%"; track.appendChild(ev);
    } else if (e.segments) {
      e.segments.forEach(function (s) {
        track.appendChild(place(el("span", "xp-bar " + s.shade), mi(s.start), mi(s.end) + 1));
      });
    } else {
      var cls = "xp-bar" + (e.group === "edu" ? " edu" : "");
      if (isProjected(e) && startV(e) < nowV) {
        track.appendChild(place(el("span", cls + " cut-right"), startV(e), nowV));
        track.appendChild(place(el("span", "xp-bar proj"), nowV, endV(e)));
      } else if (isProjected(e)) {
        track.appendChild(place(el("span", "xp-bar proj"), startV(e), endV(e)));
      } else {
        track.appendChild(place(el("span", cls), startV(e), endV(e)));
      }
    }
    row.appendChild(track);

    row.addEventListener("click", function () { choose(e.id, { fromClick: true }); });
    row.addEventListener("keydown", function (ev) {
      var i = rowList.indexOf(row), next = null;
      if (ev.key === "ArrowDown") next = rowList[i + 1];
      else if (ev.key === "ArrowUp") next = rowList[i - 1];
      if (next) { ev.preventDefault(); next.focus(); }
    });

    rowsById[e.id] = row;
    rowList.push(row);
    chart.appendChild(row);
  }

  addGroup("work", "Professional experience");
  ENTRIES.filter(function (e) { return e.group === "work"; }).forEach(buildRow);
  addGroup("edu", "Continued education");
  ENTRIES.filter(function (e) { return e.group === "edu"; }).forEach(buildRow);

  /* ---- Detail panel ---- */
  function listOf(cls, items) {
    var ul = el("ul", cls);
    items.forEach(function (t) { ul.appendChild(el("li", null, t)); });
    return ul;
  }

  function render(e) {
    panel.textContent = "";
    var kicker = (e.group === "work" ? "Professional experience" : "Education") + " · " + datesText(e);
    panel.appendChild(el("p", "xp-d-kicker", kicker));
    panel.appendChild(el("h2", null, e.org));
    var roleLine = e.role + (e.place ? " · " + e.place : "");
    panel.appendChild(el("p", "xp-d-role", roleLine));
    if (e.summary) panel.appendChild(el("p", "xp-d-summary", e.summary));

    if (e.segments) {
      panel.appendChild(el("h3", null, "Roles"));
      var ul = el("ul", "xp-roles");
      e.segments.slice().reverse().forEach(function (s) {
        var li = el("li");
        li.appendChild(el("span", "xp-role-name", s.name));
        li.appendChild(el("div", "xp-role-meta", s.place + " · " + s.years));
        if (s.text) li.appendChild(el("div", null, s.text));
        ul.appendChild(li);
      });
      panel.appendChild(ul);
    }
    if (e.bullets && e.bullets.length) {
      panel.appendChild(el("h3", null, "Highlights"));
      panel.appendChild(listOf(null, e.bullets));
    }
    if (e.note) panel.appendChild(el("p", "xp-note", e.note));
    if (e.skills && e.skills.length) {
      panel.appendChild(el("h3", null, "Skills"));
      panel.appendChild(listOf("xp-tags", e.skills));
    }
    if (e.links && e.links.length) {
      var wrap = el("div", "xp-links");
      e.links.forEach(function (l) {
        var a = el("a", null, l.label + " →");
        a.href = l.href;
        if (l.external) { a.target = "_blank"; a.rel = "noopener"; }
        wrap.appendChild(a);
      });
      panel.appendChild(wrap);
    }
  }

  function placePanel() {
    if (mobileQuery.matches) {
      if (currentId && rowsById[currentId]) rowsById[currentId].insertAdjacentElement("afterend", panel);
    } else if (panel.parentNode !== homeParent || panel.nextSibling !== homeNext) {
      homeParent.insertBefore(panel, homeNext);
    }
  }

  function markRows() {
    var mobile = mobileQuery.matches;
    rowList.forEach(function (r) {
      var on = r.getAttribute("data-id") === currentId;
      r.setAttribute("data-selected", on ? "true" : "false");
      if (mobile) { r.setAttribute("aria-expanded", on ? "true" : "false"); r.removeAttribute("aria-pressed"); }
      else { r.setAttribute("aria-pressed", on ? "true" : "false"); r.removeAttribute("aria-expanded"); }
    });
  }

  function setHash(id) {
    try {
      var url = location.pathname + location.search + (id ? "#" + id : "");
      history.replaceState(null, "", url);
    } catch (err) { /* file:// previews may block this; harmless */ }
  }

  function choose(id, opts) {
    opts = opts || {};
    var e = byId[id];
    if (!e) return;
    if (mobileQuery.matches && opts.fromClick && currentId === id) {
      currentId = null; // second tap collapses on phones
      panel.hidden = true;
      markRows(); placePanel(); setHash("");
      return;
    }
    currentId = id;
    render(e);
    panel.hidden = false;
    markRows(); placePanel();
    if (!opts.noHash) setHash(id);
    if (opts.fromClick) {
      var smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var behavior = smooth ? "smooth" : "auto";
      if (mobileQuery.matches) {
        // Phones: bring the tapped role to the top so its details open right beneath it.
        rowsById[id].scrollIntoView({ behavior: behavior, block: "start" });
      } else {
        var r = panel.getBoundingClientRect();
        if (r.top > window.innerHeight - 160 || r.top < 0) {
          panel.scrollIntoView({ behavior: behavior, block: "start" });
        }
      }
    }
  }

  function idFromHash() {
    var id = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    return byId[id] ? id : null;
  }

  window.addEventListener("hashchange", function () {
    var id = idFromHash();
    if (id && id !== currentId) choose(id);
  });

  var onChange = function () {
    markRows();
    if (!mobileQuery.matches && !currentId) choose(idFromHash() || DEFAULT_ID, { noHash: true });
    else placePanel();
  };
  if (mobileQuery.addEventListener) mobileQuery.addEventListener("change", onChange);
  else if (mobileQuery.addListener) mobileQuery.addListener(onChange);

  /* ---- First view: a link wins; otherwise the default role on larger screens, collapsed list on phones ---- */
  var first = idFromHash();
  if (first) choose(first, { noHash: true });
  else if (!mobileQuery.matches) choose(DEFAULT_ID, { noHash: true });
  else markRows();
})();
