import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/accordion';
import data from './components/accordion/data';

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
        {data.map(item => 
          <Accordion
            question={item.question}
            answer={item.answer}
            key={item.id}
          >
          </Accordion>
        )}
      </header>
    </div>
  );
}

export default App;
