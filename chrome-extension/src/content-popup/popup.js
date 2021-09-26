const htmlLiteral = `
    <div id="navi-summary-popup">
        <div class="navi-summary-output-container">
            <div id="closeButton"><span>&#10006<span></div>
            <h1>Summary</h1>
            <p id="navi-summary-output"></p>
        </div>
        <div id="navi-summary-backdrop"></div>
    </div>
`;

const hide = () => {
    document.getElementById("navi-summary-popup").style.display = "none";
    document.body.classList.remove("prevent-scroll");
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (document.getElementById("navi-summary-popup") === null) {
        const styleSheet = document.createElement("link");
        styleSheet.rel = "stylesheet";
        styleSheet.href = chrome.runtime.getURL("popup.css");
        document.head.appendChild(styleSheet);

        document.body.insertAdjacentHTML("beforeend", htmlLiteral);

        document.getElementById("closeButton").addEventListener("click", hide);
        document.getElementById("navi-summary-backdrop").addEventListener("click", hide);
    }
    else
    {
        document.getElementById("navi-summary-popup").style.display = "block";
    }

    document.getElementById("navi-summary-output").innerText = msg.content;
    document.body.classList.add("prevent-scroll");
});
