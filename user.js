// Mozilla User Preferences
// To change a preference value, you can either:
// - modify it via the UI (e.g. via about:config in the browser); or
// - set it within a user.js file in your profile (create it if it doesn't exist).
//
// Profile folder location on different systems:
// Windows: C:\Users\<username>\AppData\Roaming\Mozilla\Firefox\Profiles\xxxxxxxx.default
// Mac OS X: Users/<username>/Library/Application Support/Firefox/Profiles/xxxxxxxx.default
// Linux: /home/<username>/.mozilla/firefox/xxxxxxxx.default

// Block Google and some trackers.
user_pref("app.feedback.baseURL", "https://localhost");
user_pref("app.normandy.api_url", "https://localhost");
user_pref("app.update.url.manual", "https://localhost/%LOCALE%/firefox/");
user_pref("breakpad.reportURL", "https://localhost/report/index/");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryURL", "https://localhost/safe-browsing/v4/advisory");
user_pref("browser.safebrowsing.provider.google.gethashURL", "https://localhost/safebrowsing/gethash?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.localhost/?url=");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "https://%LOCALE%.phish-error.localhost/?url=");
user_pref("browser.safebrowsing.provider.google.reportURL", "https://localhost/safebrowsing/diagnostic?site=");
user_pref("browser.safebrowsing.provider.google.updateURL", "https://localhost/safebrowsing/downloads?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2&key=%GOOGLE_SAFEBROWSING_API_KEY%");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "https://localhost/safe-browsing/v4/advisory");
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "https://localhost/v4/threatHits?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "https://localhost/v4/fullHashes:find?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "https://%LOCALE%.malware-error.localhost/?url=");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "https://%LOCALE%.phish-error.localhost/?url=");
user_pref("browser.safebrowsing.provider.google4.reportURL", "https://localhost/safebrowsing/diagnostic?site=");
user_pref("browser.safebrowsing.provider.google4.updateURL", "https://localhost/v4/threatListUpdates:fetch?$ct=application/x-protobuf&key=%GOOGLE_SAFEBROWSING_API_KEY%&$httpMethod=POST");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "https://shavar.services.localhost/gethash?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "https://shavar.localhost/downloads?client=SAFEBROWSING_ID&appver=%MAJOR_VERSION%&pver=2.2");
user_pref("browser.safebrowsing.reportPhishURL", "https://%LOCALE%.phish-report.localhost/?url=");
// Disable Captive portal
user_pref("network.captive-portal-service.enabled", false);