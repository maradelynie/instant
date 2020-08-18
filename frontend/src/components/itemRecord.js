import React from 'react';
import { faClock, faSignInAlt, faSignOutAlt, faUtensils, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fortmatMilli } from "../utils";

function timeDiference (gone, back) {
  
  const goneDate = new Date(gone)
  const backDate = new Date(back)
 
  return backDate-goneDate

}

export default function ItemRecord(props) {
  const defaultTime = 9;
  const {data} = props;
  const lunchTime = timeDiference(data.goneLunch, data.backLunch);
  const totalTime = timeDiference(data.gotIn,data.gotOut)-lunchTime;
  const DiffTime = totalTime-(3600000*defaultTime);
 
  const fortmatDiff = DiffTime => {
    if(DiffTime>0){
      return <span id="item__total" className="item__total">{"+ "+fortmatMilli(DiffTime)}</span>;
    }
    return <span id="item__total" className="item__total-negative">{"- "+fortmatMilli(Math.abs(DiffTime))}</span>
  }

  return (<>
          <div className="item__container">
            <span className="item__day">{data.date.slice(3,5)}</span>
            <div className="item__data">
              <div>
                <span className="item__numbers">{data.gotIn.slice(16,21)}</span>
                <FontAwesomeIcon className="icon__default" icon={faSignInAlt}/>
              </div>
              <div>
                <span className="item__numbers">{data.gotOut.slice(16,21)}</span>
                <FontAwesomeIcon className="icon__default" icon={faSignOutAlt}/>
              </div>
              <div>
                <span className="item__numbers">{fortmatMilli(lunchTime)}</span>
                <FontAwesomeIcon className="icon__default" icon={faUtensils}/>
              </div>
              <div>
                <FontAwesomeIcon className="icon__default" icon={faClock}/>
                <span className="item__numbers">{fortmatMilli(totalTime)}</span>
                {fortmatDiff(DiffTime)}
              </div>
              
            </div>
            <FontAwesomeIcon onClick={e => props.setModal("edit")} className="icon__clicable" icon={faEdit}/>
            <FontAwesomeIcon onClick={e => props.setModal("delete")} className="icon__trash" icon={faTrash}/>
            
            
            </div>
          <hr/>
          </>
  );
}


