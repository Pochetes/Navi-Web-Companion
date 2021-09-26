chrome.action.onClicked.addListener(tab => {
    chrome.tabs.sendMessage(tab.id, {text: "run" }, (html) => {
        console.log(html);
    });
});
