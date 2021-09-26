chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log("here");
    let styles = `
        .background {
            display: visible;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #00000099;
            z-index: 2147483646;
        }

        .outputContainer {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50vw;
            height: 50vh;
            padding: 5%;
            background-color: #fff;
            border-radius: 1vw;
            word-wrap: normal;
            overflow-x: hidden;
            overflow-y: scroll;
            z-index: 2147483647;
        }
    `;

    let styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    document.body.insertAdjacentHTML("beforeend", "<div class=\"background\"><div class=\"outputContainer\"><p id=\"output\"></p></div></div>");

    document.getElementById("output").innerText = msg.content;
});
