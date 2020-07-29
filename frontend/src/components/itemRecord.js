import React from 'react';
import { faClock, faSignInAlt, faSignOutAlt, faUtensils, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemRecord(props) {

  return (<>
          <div className="item__container">
            <span className="item__day">01</span>
            <div className="item__data">
              <div>
                <span className="item__numbers">08:58</span>
                <FontAwesomeIcon className="icon__default" icon={faSignInAlt}/>
              </div>
              <div>
                <span className="item__numbers">18:36</span>
                <FontAwesomeIcon className="icon__default" icon={faSignOutAlt}/>
              </div>
              <div>
                <span className="item__numbers">01:12</span>
                <FontAwesomeIcon className="icon__default" icon={faUtensils}/>
              </div>
              <div>
                <FontAwesomeIcon className="icon__default" icon={faClock}/>
                <span className="item__numbers">08:58</span>
                <span className="item__total">+ 00:58</span>
              </div>
              
            </div>
            <FontAwesomeIcon onClick={e => props.setModal("edit")} className="icon__clicable" icon={faEdit}/>
            <FontAwesomeIcon onClick={e => props.setModal("delete")} className="icon__trash" icon={faTrash}/>
            
            
            </div>
          <hr/>
          </>
  );
}


