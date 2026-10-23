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
})();
