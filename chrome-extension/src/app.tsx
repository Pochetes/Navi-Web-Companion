import TextButton from "./components/button/button";
import "./app.css";

const App = () => {
    document.documentElement.setAttribute("theme", "dark");

    return (
        <main>
            <TextButton text="Summarize" />
        </main>
    );
}

export default App;
