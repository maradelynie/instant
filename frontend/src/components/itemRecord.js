import React from 'react';
import { faClock, faSignInAlt, faSignOutAlt, faUtensils, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fortmatMilli,timeDiference } from "../utils";
import {selectItem} from "../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";




export default function ItemRecord(props) {
  const dispatch = useDispatch();
  const {defaultTime} = useSelector(state => state);

  const {data} = props;
  const lunchTime = timeDiference(data.goneLunch, data.backLunch,data.date);
  const totalTime = timeDiference(data.gotIn,data.gotOut,data.date)-lunchTime;
  const DiffTime = totalTime-(3600000*defaultTime);
 
  const fortmatDiff = DiffTime => {
    if(DiffTime>0){
      return <span id="item__total" className="item__total">{"+ "+fortmatMilli(DiffTime)}</span>;
    }
    return <span id="item__total" className="item__total-negative">{"- "+fortmatMilli(Math.abs(DiffTime))}</span>
  }
  const deletItem = (data) => {
    dispatch(selectItem(data))
    props.setModal("delete")
  }
  const editItem = (data) => {
    dispatch(selectItem(data))
    props.setModal("edit")
  }
  return (<>
          <div className="item__container">
            <span className="item__day">{data.date.split(" ")[2]}</span>
            <div className="item__data">
              <div>
                <span className="item__numbers">{data.gotIn.slice(0,-3)}</span>
                <FontAwesomeIcon className="icon__default" icon={faSignInAlt}/>
              </div>
              <div>
                <span className="item__numbers">{data.gotOut.slice(0,-3)}</span>
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
            <FontAwesomeIcon onClick={e => editItem(data)} className="icon__clicable" icon={faEdit}/>
            <FontAwesomeIcon onClick={e => deletItem(data)} className="icon__trash" icon={faTrash}/>
            
            
            </div>
          <hr/>
          </>
  );
}


