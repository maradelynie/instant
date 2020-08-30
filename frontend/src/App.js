import React, {useState} from 'react';
import Hader from './components/header';
import MainContent from './components/mainContent';
import ModalComponent from './components/modalComponent';
import Loading from './components/loading';

function App() {
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
 

  return (
    <>
      <Hader/>
      <MainContent setModal={setModal} setLoading={setLoading}/>
      <ModalComponent setModal={setModal} modal={modal}/>
      <Loading loading={loading}/>
    </>
  );
}

export default App;
