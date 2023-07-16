
import './App.css';
import Accordian from './components/Accordian';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";




function App() {

  const [mode, setmode] = useState('light')
  const [text, settext] = useState('dark')
  const [textBoxBorder, setTextBoxBorder] = useState('')
  const [alert, setAlert] = useState("d-none")
  const [alertText, setAlertText] = useState("")

  const toggleBg = () => {
    if (mode === 'light') {
      setmode('dark')
      settext('light')
      document.body.style.backgroundColor = ('#021735')
      setTextBoxBorder('border border-white')
      setAlertText("Dark")
      setAlert("d-block")
      setTimeout(() => {
        setAlert("d-none")
      }, 1500)
    }
    else {
      setmode('light')
      settext('dark')
      document.body.style.backgroundColor = ('white')
      setTextBoxBorder('none')
      setAlertText("Light")
      setAlert("d-block")
      setTimeout(() => {
        setAlert("d-none")
      }, 1500)
    }
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TextForm/>} />
        
        <Route path="/about" element={<Accordian />} />
      </Routes>
    </>
    // <>

    //   <Navbar title="Project1" about="hello"  toggleMode = {toggleBg} mode={mode}/>
    //   <Alerts display={alert} text={alertText}/>
    //   <div className={`container bg-${mode} text-${text} p-5 rounded-5 my-5 py-5 ${textBoxBorder}`} >
    //     <TextForm heading="Enter Text" border={textBoxBorder}/>
    //   </div>
    //   <Accordian/>
    // </>
  );
}


export default App;
