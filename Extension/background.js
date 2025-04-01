chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "autoApplyJobs") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["content.js"]
            });
        });
        sendResponse({ status: "Auto apply started" });
    }
});
