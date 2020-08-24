import React,{useState} from 'react';
import Button from '../button';
import {addRecord} from "../../redux/actions";
import {useDispatch} from "react-redux";
import { setTimeValue,checkTimeValue,confirmWarning,checkDateValue} from "../../utils";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputData(props) {
  const dispatch = useDispatch();

  const [day, setDay] = useState("")
  const [gotIn, setGotIn] = useState("")
  const [goneLunch, setGoneLunch] = useState("")
  const [backLunch, setBackLunch] = useState("")
  const [gotOut, setGotOut] = useState("")

  const sendData = async (e) => {
    e.preventDefault()
   
    const data = mountData()
    
    if(confirmWarning()){
      await dispatch(addRecord(data))
      props.setModal(false)
    }
    
  }

  const mountData = () => {
    const split = new Date().toString();
    const timeZoneFormatted = split.slice(24);
    const date = new Date(day+timeZoneFormatted).toString()
    const yearMonth = date.split(" ")[1]+" "+date.split(" ")[3]

    const data = {
      user:"DefaultUser001",
      date,
      gotIn: gotIn+":00",
      goneLunch: goneLunch+":00",
      backLunch: backLunch+":00",
      gotOut: gotOut+":00",
      yearMonth,
    }
    return data
  }
  
  return (<>
          <div className="main__card">
          <FontAwesomeIcon onClick={e=> props.setModal(false)} className="icon__close" icon={faTimes}/> 

          <h2>input record</h2>
            
              <form  className="form__input-container">
                
                  <label className="label__input">day
                    <input className="input__default input__wrong" type="date" onBlur={e => checkDateValue(e)} onChange={e => setDay(e.target.value)} value={day} placeholder="day" ></input>
                  </label>
                <div className="form__input">
                  <label className="label__input">start time
                    <input className="input__default" type="text" onBlur={e => checkTimeValue(e)} onChange={e => setGotIn(setTimeValue(e))} value={gotIn} placeholder="00:00" ></input>
                  </label>
                  <label className="label__input">out for lunch
                    <input className="input__default" type="text" onBlur={e => checkTimeValue(e)} onChange={e => setGoneLunch(setTimeValue(e))} value={goneLunch} placeholder="00:00" ></input>
                  </label>
                  <label className="label__input">back from lunch
                    <input className="input__default" type="text" onBlur={e => checkTimeValue(e)} onChange={e => setBackLunch(setTimeValue(e))} value={backLunch} placeholder="00:00" ></input>
                  </label>
                  <label className="label__input">end time
                    <input className="input__default" type="text" onBlur={e => checkTimeValue(e)} onChange={e => setGotOut(setTimeValue(e))} value={gotOut} placeholder="00:00" ></input>
                  </label>
                </div>
              <div className="default__buttons">  
                <Button type="default" label="submit" text="send" action={e => sendData(e)} />
              </div>
              </form>
            
          </div>
          </>
  );
}


