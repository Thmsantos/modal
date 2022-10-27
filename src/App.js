import './App.css';
import { useState } from "react";
import Modal from "react-modal"

Modal.setAppElement('#root')

function App() {

  const [modalIsopen, setIsopen] = useState(false)

  function openModal(){
    setIsopen(true);
  }

  function closeModal(){
    setIsopen(false);
  }

  return (
    <div className="App">
        <button onClick={openModal}>Open</button>
        <Modal
          isOpen={modalIsopen}
          onRequestClose={closeModal}
          contentlabel="example modal"
          overlayClassName="porra"
          className="modal-content"
        >
            <h2>Foi caraio</h2>
            <br />
            <p>Água é uma substância química cujas moléculas são formadas por
               dois átomos de hidrogênio e um de oxigênio. É abundante no Universo,
               inclusive na Terra, onde cobre grande parte de sua superfície e é o
               maior constituinte dos fluidos dos seres vivos.
            </p>
            <button onClick={closeModal}>close</button>
        </Modal>
    </div>
  );
}

export default App;
