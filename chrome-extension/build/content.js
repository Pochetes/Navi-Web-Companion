chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.text === "run") {
        sendResponse(document.getElementsByTagName("p"));
    }
})
