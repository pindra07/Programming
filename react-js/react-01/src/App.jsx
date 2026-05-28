import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import MainFile from "./components/ContextApiExample/MainFile";

function App() {
  return (
    <>
      <BrowserRouter>
      <Link to={"/"}>HomePage</Link>
      <Link to={"/neet/online-coaching-class-11"}>Class 11</Link>
      <Link to={"/neet/online-coaching-class-12"}>Class 12</Link>
        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

      <MainFile />
    </>
  );
}

// Component -> 1
function Class11Program() {
  const navigate = useNavigate()
  function redirectUser() {
    navigate("/neet/online-coaching-class-12")
  }

  return <>
    <h1>Neet/online-coaching-class 11 Route</h1>
    <button onClick={redirectUser}>go to class 12 using useNavigate hook</button>
  </>
}

// Component -> 2
function Class12Program() {

  const navigate = useNavigate();
  function redirectUser() {
    navigate("/")
  }

  return <>
    <h1>Neet/online-coaching-class 12 Route</h1>
    <button onClick={redirectUser}>Go back to landing page</button>
  </>
}

function LandingPage() {

  const navigate = useNavigate()
  function redirectUser() {
    navigate("/neet/online-coaching-class-11")
  }

  return <>
    <h1>This is a landing page</h1>
    <button onClick={redirectUser}>go to class 11</button>
  </>
}

function ErrorPage() {
  return <>
    <h1>No content found... url error go to correct url</h1>
  </>
}




export default App;
