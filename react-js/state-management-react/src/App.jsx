import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  // this is for useFetch hook implementation
  const [page, setPage] = useState(1);
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + page
  );

  // this if for usePrev implementation
  const [state, setState] = useState(0);
  const prev = usePrev(state);


  // this is for useDebounce hook
  function sendDataToBackend() {
    // fetch('some api')
    console.log("sending request to backend")
  }

  const deBounceFunction = useDebounce(sendDataToBackend)

  return (
    <>
    {/* useFetch hook implementation */}
      <h1>Custom Hooks</h1>
      <h3>useFetch Hook Implementation</h3>
      <button onClick={() => setPage(1)}>post 1</button>
      <button onClick={() => setPage(2)}>post 2</button>
      <button onClick={() => setPage(3)}>post 3</button>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div style={{ width: "100px" }}>{JSON.stringify(data)}</div>
      )}
      <hr />
      {/* usePrev Hook implementation */}
      <h3>usePrev Hook Implementation</h3>
      <p>{state}</p>
      <button
        onClick={() => {
          setState((curr) => curr + 1);
        }}
      >
        Click Me
      </button>
      <p>The previous value was {prev}</p>
      <hr />
        {/* useDebounce Hook implementation */}
      <h3>useDebounce Hook Implementation</h3>
      <input onChange={deBounceFunction} type="text" />
    </>
  );
}

export default App;

// console.log("hello world")
