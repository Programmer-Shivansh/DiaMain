import Modal from "react-modal";
import * as React from 'react';
import { Routes, Route} from 'react-router-dom';
import Game from "./game";
import Login from "./components/login";

// Set the app element for the modal
Modal.setAppElement('#root');


function App() {
  return (
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  )
 
}

export default App;
