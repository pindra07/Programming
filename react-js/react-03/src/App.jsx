import { useState, createContext, useContext } from "react";
import "./App.css";

const BulbContext = createContext(); // creating context

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    // providing values/data to context
    <BulbContext.Provider value={{ bulbOn, setBulbOn }}> 
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <>
      <h1>Context API</h1>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>
    </>
  );
}

function LightBulb() {
  return (
    <>
      <BulbState />
      <ToggleBulbState />
    </>
  );
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext); // using context values
  return <>{bulbOn ? "Bulb On 💡" : "Bulb Off"}</>;
}

function ToggleBulbState() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  return (
    <>
      <button onClick={() => setBulbOn(!bulbOn)}>toggle button</button>
    </>
  );
}

export default App;
