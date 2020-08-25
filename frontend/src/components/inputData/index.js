import React,{useState} from 'react';
import Button from '../button';
import InputField from "../inputField";
import {addRecord} from "../../redux/actions";
import {useDispatch} from "react-redux";
import { confirmWarning} from "../../utils";

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
                    <InputField type="date"  onChange={setDay} value={day} placeholder="day" ></InputField>
                  </label>
                <div className="form__input">
                  <label className="label__input">start time
                    <InputField type="text"  onChange={setGotIn} value={gotIn} placeholder="00:00" ></InputField>
                  </label>
                  <label className="label__input">out for lunch
                    <InputField type="text"  onChange={setGoneLunch} value={goneLunch} placeholder="00:00" ></InputField>
                  </label>
                  <label className="label__input">back from lunch
                    <InputField type="text" onChange={setBackLunch} value={backLunch} placeholder="00:00" ></InputField>
                  </label>
                  <label className="label__input">end time
                    <InputField type="text"  onChange={setGotOut} value={gotOut} placeholder="00:00" ></InputField>
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

