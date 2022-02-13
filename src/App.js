import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* @TODO: wael: fix styles for this button */}
          <button
            className="hello-sayd"
            style={{ border: '1px solid black' }}
          >
            {" "}
            hello Sayd!
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
