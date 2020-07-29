import React from 'react';
import InputData from './inputData';
import EditData from './editData';
import DeleteData from './deleteData';

export default function ModalComponent(props) {
  if(!props.modal){
    return <div></div>
  }
  const modalContent = () => {
    if(props.modal==="edit"){
      return <EditData/>

    }
    if(props.modal==="delete"){
      return <DeleteData/>
      
    }
    if(props.modal==="input"){
      return <InputData/>
      
    }
  }

  return (<>
          <div onClick={e => props.setModal(false)} className="modal__bg">sdasd
          </div>
          <div className="modal__content">
            {modalContent()}
          </div>
          

          </>
  );
}


