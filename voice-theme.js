let darkModeEnabled = false;

function applyVoiceTheme(enabled) {
  darkModeEnabled = enabled;
  if (document.documentElement) {
    document.documentElement.classList.toggle("opengooglevoice-dark-mode", enabled);
  }
  console.info("[Open Google Voice] Theme applied:", enabled ? "dark" : "light");
}

console.info("[Open Google Voice] Content script loaded on", location.href);

document.addEventListener("DOMContentLoaded", () => {
  applyVoiceTheme(darkModeEnabled);
}, { once: true });

browser.storage.local.get("darkMode").then((settings) => {
  console.info("[Open Google Voice] Stored preference:", settings.darkMode === true);
  applyVoiceTheme(settings.darkMode === true);
}).catch((error) => {
  console.error("[Open Google Voice] Could not read theme preference:", error);
});

browser.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "local" && changes.darkMode) {
    console.info("[Open Google Voice] Preference changed:", changes.darkMode.newValue === true);
    applyVoiceTheme(changes.darkMode.newValue === true);
  }
});