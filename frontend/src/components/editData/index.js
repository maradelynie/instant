import React,{useState} from 'react';
import Button from '../button';
import {updateRecord} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import { setTimeValue,checkTimeValue,confirmWarning} from "../../utils";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditData(props) {
  const dispatch = useDispatch();
  const {selectedItem} = useSelector(state => state);
  
  const [gotIn, setGotIn] = useState(selectedItem.gotIn.slice(0,-3))
  const [goneLunch, setGoneLunch] = useState(selectedItem.goneLunch.slice(0,-3))
  const [backLunch, setBackLunch] = useState(selectedItem.backLunch.slice(0,-3))
  const [gotOut, setGotOut] = useState(selectedItem.gotOut.slice(0,-3))

  const sendUpdate = async (e) => {
    e.preventDefault()
    
    const data = mountData(selectedItem)
    
    if(confirmWarning()){
      await dispatch(updateRecord(data))
      props.setModal(false)
    }
    
  }

  const mountData = (oldData) => {
    const data = oldData;

    data.gotIn = gotIn+":00"
    data.goneLunch = goneLunch+":00"
    data.backLunch = backLunch+":00"
    data.gotOut = gotOut+":00"

    return data
  }
  
  return (<>
          <div className="main__card">
          <FontAwesomeIcon onClick={e=> props.setModal(false)} className="icon__close" icon={faTimes}/> 

          <h2>Edit record {selectedItem.date.split(" ")[1]+" "+selectedItem.date.split(" ")[2]+" "+selectedItem.date.split(" ")[3]}</h2>
            
              <form >
                <div className="form__edit">
                  <label className="label__edit">start time
                    <input className="input__default" onBlur={e => checkTimeValue(e)} onChange={e => setGotIn(setTimeValue(e))} value={gotIn} ></input>
                  </label>
                  <label className="label__edit">out for lunch
                    <input className="input__default" onBlur={e => checkTimeValue(e)} onChange={e => setGoneLunch(setTimeValue(e))} value={goneLunch} ></input>
                  </label>
                  <label className="label__edit">back from lunch
                    <input className="input__default" onBlur={e => checkTimeValue(e)} onChange={e => setBackLunch(setTimeValue(e))} value={backLunch} ></input>
                  </label>
                  <label className="label__edit">end time
                    <input className="input__default" onBlur={e => checkTimeValue(e)} onChange={e => setGotOut(setTimeValue(e))} value={gotOut} ></input>
                  </label>
                </div>
              <div className="default__buttons">  
                <Button type="default" label="submit" text="edit" action={e => sendUpdate(e)} />
              </div>
              </form>
            
          </div>
          </>
  );
}


