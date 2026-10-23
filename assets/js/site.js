(() => {
  const button = document.getElementById("theme-toggle");
  const root = document.documentElement;

  if (!button) return;

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    button.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  }

  setTheme(
    localStorage.getItem("theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  button.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

    const notes = [...document.querySelectorAll(".note[data-year]")];
  const yearButtons = [...document.querySelectorAll("[data-filter-year]")];
  const tagButtons = [...document.querySelectorAll("[data-filter-tag]")];
  const noResults = document.getElementById("no-results");

  let selectedYear = "all";
  let selectedTag = "all";

  function applyFilters() {
    let visible = 0;

    notes.forEach(note => {
      const tags = (note.dataset.tags || "").split("|").filter(Boolean);
      const matchesYear =
        selectedYear === "all" || note.dataset.year === selectedYear;
      const matchesTag =
        selectedTag === "all" || tags.includes(selectedTag);
      const show = matchesYear && matchesTag;

      note.hidden = !show;
      if (show) visible++;
    });

    if (noResults) noResults.hidden = visible !== 0;
  }

  function activate(buttons, selected, attribute, value) {
    buttons.forEach(button => {
      button.classList.toggle("active", button === selected);
    });
    return value;
  }

  yearButtons.forEach(button => {
    button.addEventListener("click", () => {
      selectedYear = activate(
        yearButtons, button, "data-filter-year", button.dataset.filterYear
      );
      applyFilters();
    });
  });

  tagButtons.forEach(button => {
    button.addEventListener("click", () => {
      selectedTag = activate(
        tagButtons, button, "data-filter-tag", button.dataset.filterTag
      );
      applyFilters();
    });
  });

  document.querySelectorAll(".tag-filter").forEach(button => {
    button.addEventListener("click", () => {
      selectedTag = button.dataset.tag;
      tagButtons.forEach(item => {
        item.classList.toggle("active", item.dataset.filterTag === selectedTag);
      });
      applyFilters();
      document.getElementById("notes")?.scrollIntoView({ behavior: "smooth" });
    });
  });
  
})();
