const darkModeToggle = document.getElementById("darkModeToggle");

function applyDarkMode(enabled) {
  document.body.classList.toggle("dark-mode", enabled);
  darkModeToggle.checked = enabled;
}

browser.storage.local.get("darkMode").then((settings) => {
  applyDarkMode(settings.darkMode === true);
}).catch((error) => {
  console.error("Could not read dark-mode preference:", error);
});

darkModeToggle.addEventListener("change", () => {
  const enabled = darkModeToggle.checked;
  applyDarkMode(enabled);
  browser.storage.local.set({ darkMode: enabled }).catch((error) => {
    console.error("Could not save dark-mode preference:", error);
  });
});