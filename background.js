/*
 * Develop: Ruben Ordonez
 * URL: https://www.rubenordonez.com/
 *   
 */

/*
 * Called by browserAction.onClicked
 */
function openGoogleVoice() {
  console.log("openGoogleVoice function called");
  browser.tabs.create({url: "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://voice.google.com&followup=https://voice.google.com&scc=1&authuser=0"});
}
browser.browserAction.onClicked.addListener(openGoogleVoice);

/*
 * Called when the item has been created, or when creation failed due to an error.
 * We'll just log success/failure here.
 */
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

/*
 * Creates a new context menu item.
 */
browser.menus.create({
  id: "google-voice",
  title: "Google Voice",
  type: "normal",
  contexts: ["all"],
  onclick: openGoogleVoice
}, onCreated);
