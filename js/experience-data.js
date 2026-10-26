/* Experience page: draws the shared-axis timeline and fills the detail panel.

   HOW TO EDIT
   - The roles themselves (dates, titles, bullets, skills) are in data/career.json. Edit that file, then run
     python scripts/build_career.py to rebuild js/experience-data.js, which this script reads.
   - Dates are [year, month]. The end month counts as part of the role. Use "present" for a current role.
   - Search career.json for "EDIT:" to find the text you still want to refine.
   - DEFAULT_ID below is the entry shown when the page first opens. A link such as experience.html#army overrides it. */
(function () {
  "use strict";

  var DEFAULT_ID = "newmark"; // EDIT: change to any id below (ready3, newmark, green-tree, boomtown, gordian, army, univar, guttering, ucof, mst, pmp, ou)

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  /* The entries (roles, dates, bullets, skills) live in data/career.json and are built into
     js/experience-data.js by scripts/build_career.py. Edit career.json, not this file. */
  var ENTRIES = window.EXPERIENCE_ENTRIES || [];
  if (!ENTRIES.length) return;

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