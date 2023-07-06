
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'




function App() {
  return (
    <>

      <Navbar title="Project1" about="hello" />
      <div className="container">
        <TextForm heading="Enter Text"/>
      </div>
    </>
  );
}


export default App;
