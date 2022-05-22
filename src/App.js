import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <Search />
      <footer>
        <small>
          <a href="https://github.com/marianagdias/react-dictionary-app">
            Open-source code
          </a>{" "}
          by Mariana Galante Dias
        </small>
      </footer>
    </div>
  );
}

export default App;
