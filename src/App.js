import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Formtext from './components/Formtext'
import Faq from './components/Faq'
// import Preview from "./components/Preview";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    console.log('inside togglemode');
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#000d1a"
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      
      {/* <Formtext mode ={mode}/> */}
      {/* <Faq /> */}
      <Router>
      <Navbar toggleMode={toggleMode} mode={mode} />
        <Routes>
          <Route exact path="/" element={<Formtext mode ={mode}/>} />
          <Route exact path="/faq" element={<Faq mode ={mode}/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
