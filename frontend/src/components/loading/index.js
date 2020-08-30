import React from 'react';
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.scss';


export default function Loading(props) {
    if(!props.loading){
        return <div></div>
      }
 
  return (<>
            <div  className="modal__content">
                <FontAwesomeIcon className="icon__loading" icon={faCircleNotch}/>
            </div>
            <div  onClick={e => props.setModal(false)} className="modal__bg">
            </div>
          </>
  );
}


