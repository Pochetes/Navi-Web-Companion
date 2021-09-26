const SummaryBot = require("summarybot");
const summaryBot = new SummaryBot();

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({ id: "summarize", title: "Summarize", contexts: [ "selection" ] });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (typeof info.selectionText === "string") {
        chrome.tabs.sendMessage(tab.id, { content: summaryBot.run(info.selectionText, 100, false) });
    }
});
