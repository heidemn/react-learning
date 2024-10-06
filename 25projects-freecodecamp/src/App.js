import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/accordion/index.tsx";
import { Accordions } from "./components/accordions/index.tsx";
import { Color } from "./components/color/index.tsx";
import data from "./components/accordion/data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h4>Color:</h4>
        <Color></Color>

        <h4>Independent Accordions:</h4>
        {data.map((item) => (
          <Accordion
            question={item.question}
            answer={item.answer}
            key={item.id}
          ></Accordion>
        ))}

        <h4>Linked Accordions, with max. 1 open:</h4>
        <Accordions items={data}></Accordions>

        <h4>Linked Accordions, with multi-select:</h4>
        <Accordions items={data} multiSelect={true}></Accordions>
      </header>
    </div>
  );
}

export default App;
