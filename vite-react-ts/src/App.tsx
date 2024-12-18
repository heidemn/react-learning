import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sub from './components/Sub'

function App(): JSX.Element {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  // fires always
  useEffect(() => {
    console.log("deps = undefined");
  });

  // fires once
  useEffect(() => {
    console.log("deps = []");
  }, []);

  // fires when "count" changes
  useEffect(() => {
    console.log("deps = [count]");
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count2 is {count2}
        </button>
        {(count % 2 === 1) && (
          <Sub count={count} />
        )}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
