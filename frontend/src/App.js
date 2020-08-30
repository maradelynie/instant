import React, {useState} from 'react';
import Hader from './components/header';
import MainContent from './components/mainContent';
import ModalComponent from './components/modalComponent';
import Loading from './components/loading';
import ErrorScreen from './components/errorScreen';

function App() {
  const [modal, setModal] = useState(false)
  const [errorStatus, setErrorStatus] = useState(false)
  const [loading, setLoading] = useState(false)
 

  return (
    <>
      <Hader/>
      <ErrorScreen errorStatus={errorStatus} setError={setErrorStatus} />
      <MainContent setError={setErrorStatus} setModal={setModal} setLoading={setLoading}/>
      <ModalComponent setError={setErrorStatus} setModal={setModal} modal={modal}/>
      <Loading loading={loading}/>
    </>
  );
}

export default App;
