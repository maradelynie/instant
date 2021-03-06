import React from 'react';
import InputData from '../inputData';
import EditData from '../editData';
import DeleteData from '../deleteData';
import './style.scss';


export default function ModalComponent(props) {

  if(!props.modal){
    return <div></div>
  }
  const modalContent = () => {
    if(props.modal==="edit"){
      return <EditData setError={props.setError} setModal={props.setModal}/>

    }
    if(props.modal==="delete"){
      return <DeleteData setError={props.setError} setModal={props.setModal}/>
      
    }
    if(props.modal==="input"){
      return <InputData setError={props.setError} setModal={props.setModal}/>
      
    }
  }

  return (<>
            <div  className="modal__content">
              {modalContent()}
            </div>
            <div  onClick={e => props.setModal(false)} className="modal__bg">
            </div>
          </>
  );
}


