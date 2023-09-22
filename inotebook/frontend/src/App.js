

import { Routes, Route } from "react-router";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import NoteState from "./context/notes/NoteState";
import NewNote from "./Pages/NewNote";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message="hello"/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/newnote" element={<NewNote />} />
          </Routes>
        </div>
      </NoteState>

    </>
  );
}

export default App;
