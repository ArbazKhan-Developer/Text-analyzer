import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Formtext from './components/Formtext'
import Footer from './components/Footer'

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    console.log('inside togglemode');
    if(mode ==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#000d1a"
    }else{
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      <Navbar toggleMode={toggleMode} mode ={mode}/>
      <Formtext mode ={mode}/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
