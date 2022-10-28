import './App.css';
import { useState } from "react";
import Modal from "react-modal"
import Select from 'react-select'

Modal.setAppElement('#root')

function App() {

  const [modalIsopen, setIsopen] = useState(false)

  function openModal(){
    setIsopen(true);
  }

  function closeModal(){
    setIsopen(false);
  }

  const options = [
    { label: 'Chocolate' },
    { label: 'Strawberry' },
    { label: 'Vanilla' }
  ]

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
           
          <Select options={options} />

            <button onClick={closeModal}>close</button>
        </Modal>
    </div>
  );
}

export default App;
