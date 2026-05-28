import { useState, useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef();
  const timerRef = useRef()
  const [currentCount, setCurrentCount] = useState(1)


  function focusOnInput() {
    console.log(inputRef.current)
    inputRef.current.focus()
  }

  function startClock() {
    let value = setInterval(() => {
      setCurrentCount(c => c+1)
    }, 1000);
    timerRef.current = value;
  }

  function stopClock() {
    clearInterval(timerRef.current)
  }

  return (
    <>
    <input ref={inputRef} id='name' type="text" />
    <input type="text" />
    <button onClick={focusOnInput}>submit</button> <br /><br />
    <button onClick={startClock}>start</button>
    <button onClick={stopClock}>stop</button>
    <pre>{currentCount}</pre>
    </>
  )
}

export default App

// document.getElementbyId("name").focus
// window.setTimeout()
