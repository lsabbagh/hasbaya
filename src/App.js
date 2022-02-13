import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* @TODO: wael: add styles fo this button */}
          <button> hello Sayd!</button>
        </a>
      </header>
    </div>
  );
}

export default App;
