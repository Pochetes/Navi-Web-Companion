import "./styles.css";
import checkmark from "./images/checkmark.svg";
import github from "./images/github.svg";
import "./app.css";

export default function App() {
  return (
        <main className="app">
            <nav className="header-elems">
                <h1 className="header-title">navi</h1>
                <h2 className="header-version">(version 1.0.0)</h2>
            </nav>
            <p className="header-desc">The Ultimate Web Companion.</p>
            <div>
                <h1>Instructions:</h1>
                <p>
                    <img style={{ position: "relative", marginRight: 25 }} src={checkmark} alt="check-mark"></img>
                    Highlight any continous text of your choice.
                </p>
                <p>
                    <img style={{ position: "relative", marginRight: 25 }} src={checkmark} alt="check-mark"></img>
                    While selected, right click and select <i>Summarize</i>.
                </p>
                <p>
                    <img style={{ position: "relative", marginRight: 25 }} src={checkmark} alt="check-mark"></img>
                    A pop-up screen will show up displaying the summarized content.
                </p>
            </div>
            <a href="https://github.com/Pochetes/Navi-Web-Companion" target="_blank">
                <img className="github-social" src={github} alt="github-repo"></img>
            </a>
        </main>
  );
}
