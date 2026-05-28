import React, { useState } from 'react';
import {
  RecoilRoot,
  atom,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

import { App2 } from './App2';

function App() {
  const [count, setCount] = useState(0)

  return <>
    {count}
    <Increase setCount={setCount} />
    <Decrease setCount={setCount} />
    <App2 />
  </>
}

const Increase = ({setCount}) => {
  function increase() {
    setCount(c=> c+1)
  }

  return <>
    <button onClick={increase}>Increase</button>
  </>
}

const Decrease = ({setCount}) => {

  function decrease() {
    setCount(c=> c-1)
  }

  return <>
    <button onClick={decrease}>Decrease</button>
  </>
}

export default App