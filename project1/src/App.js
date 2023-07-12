
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React,{useState} from 'react';




function App() {

  const [mode, setmode] = useState('light')
  const [text, settext] = useState('dark')

  const toggleBg= ()=>{
    if (mode === 'light'){
      setmode('dark')
      settext('light')
      document.body.style.backgroundColor = ('#0c2368')
    }
    else{
      setmode('light')
      settext('dark')
      document.body.style.backgroundColor = ('white')
    }
  }
  return (
    <>

      <Navbar title="Project1" about="hello"  toggleMode = {toggleBg} mode={mode}/>
      <div className={`container bg-${mode} text-${text} p-5 rounded-5 my-5 py-5`}>
        <TextForm heading="Enter Text"/>
      </div>
    </>
  );
}


export default App;
