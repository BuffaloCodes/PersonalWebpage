/* Shared behavior for every page on the site.
   Each page loads this file once, at the bottom of the page:
   <script src="js/site.js"></script>
   Parts that only matter on one page (the project filter, the bookshelf search)
   switch themselves on only when that page's elements exist. */
(function () {
  var root = document.documentElement;

  /* ---- Mobile menu ---- */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Light / dark toggle (the starting theme is set in each page's <head>) ---- */
  var themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.setAttribute("aria-pressed", root.getAttribute("data-theme") === "dark" ? "true" : "false");
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      themeBtn.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
    });
  }
  requestAnimationFrame(function () {
    root.classList.remove("no-theme-transitions");
  });

  /* ---- Projects page: category filter ---- */
  var grid = document.getElementById("proj_grid");
  var filterButtons = document.querySelectorAll(".pf_btn");
  if (grid && filterButtons.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) { b.classList.remove("is_active"); });
        btn.classList.add("is_active");
        var wanted = btn.getAttribute("data-filter");
        grid.querySelectorAll(".proj_card").forEach(function (card) {
          var show = wanted === "all" || card.getAttribute("data-category") === wanted;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---- Bookshelf page: search by title or author ---- */
  var search = document.getElementById("bookshelfQ");
  var groups = document.querySelectorAll(".bk_group");
  if (search && groups.length) {
    var empty = document.getElementById("bk_empty");
    search.addEventListener("input", function () {
      var needle = search.value.trim().toLowerCase();
      var anyVisible = false;
      groups.forEach(function (group) {
        var visibleInGroup = 0;
        group.querySelectorAll("li").forEach(function (item) {
          var label = item.querySelector(".bk_text") || item;
          var match = !needle || label.textContent.toLowerCase().indexOf(needle) !== -1;
          item.hidden = !match;
          if (match) visibleInGroup++;
        });
        group.hidden = visibleInGroup === 0;
        if (needle && visibleInGroup > 0) group.open = true;
        if (visibleInGroup > 0) anyVisible = true;
      });
      if (empty) empty.hidden = anyVisible;
    });
  }
})();
