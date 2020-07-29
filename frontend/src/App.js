import React, {useState} from 'react';
import Hader from './components/header';
import MainContent from './components/mainContent';
import ModalComponent from './components/modalComponent';

function App() {
  const [modal, setModal] = useState(false)
 

  return (
    <>
      <Hader/>
      <MainContent setModal={setModal}/>
      <ModalComponent setModal={setModal} modal={modal}/>
    </>
  );
}

export default App;
