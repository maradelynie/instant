import React from 'react';
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.scss';


export default function Loading(props) {
  if(props.noMore){
    return <div></div>
  }
 
  return (<>
            <div  className="showmore__container">
                <FontAwesomeIcon onClick={props.action} className="icon__showmore" icon={faChevronCircleDown}/>
            </div>
            
          </>
  );
}


