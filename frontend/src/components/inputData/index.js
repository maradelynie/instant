import React,{useState} from 'react';
import Button from '../button';
import InputField from "../inputField";
import {addRecord} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {confirmWarning,formatMoutData} from "../../utils";
import './style.scss';

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {postRecordApi} from "../../api";

export default function InputData(props) {
  const dispatch = useDispatch();

  const [day, setDay] = useState("")
  const [gotIn, setGotIn] = useState("")
  const [goneLunch, setGoneLunch] = useState("")
  const [backLunch, setBackLunch] = useState("")
  const [gotOut, setGotOut] = useState("")

  const sendData = async (e) => {
    e.preventDefault()

    if(confirmWarning()){
      const data = mountDataInput()
      
      try{
        const resp = await postRecordApi(data)
        const newData = resp.newRecord
        newData.date = new Date(newData.date).toString()
  
        await dispatch(addRecord(newData))
        props.setModal(false)
  
      }catch{
        props.setModal(false)
        return props.setError("Something went wrong saving this record, please try again later.")
      }
    }
    
  }

  const mountDataInput = () => {
    const data = {
      user:"DefaultUser001",
      date: formatDay(day),
      gotIn: formatMoutData(gotIn),
      goneLunch: formatMoutData(goneLunch),
      backLunch: formatMoutData(backLunch),
      gotOut: formatMoutData(gotOut),
      yearMonth:formatYearMonth(day)
    }
    return data
  }

  const formatDay = (day) => {
    const split = new Date().toString();
    const timeZoneFormatted = split.slice(24);
    return new Date(day+timeZoneFormatted).toString()
  }

  const formatYearMonth = (day) => {
    const date = formatDay(day)
    return date.split(" ")[1]+" "+date.split(" ")[3]
  }

  
  return (<>
          <div className="default__card">
          <FontAwesomeIcon onClick={e=> props.setModal(false)} className="icon__close" icon={faTimes}/> 

          <h2>input record</h2>
            
              <form  className="form__input-container">
                
                  <label className="label__input">day
                    <InputField data-testid="input-element" type="date"  onChange={setDay} value={day} placeholder="day" ></InputField>
                  </label>
                <div className="form__input">
                  <label className="label__input">start time
                    <InputField data-testid="input-element" type="text" onChange={setGotIn} value={gotIn} placeholder="00:00" ></InputField>
                  </label>
                  <label className="label__input">out for lunch
                    <InputField data-testid="input-element" type="text"  onChange={setGoneLunch} value={goneLunch} placeholder="00:00" ></InputField>
                  </label>
                  <label className="label__input">back from lunch
                    <InputField data-testid="input-element" type="text" onChange={setBackLunch} value={backLunch} placeholder="00:00" ></InputField>
                  </label>
                  <label className="label__input">end time
                    <InputField data-testid="input-element" type="text"  onChange={setGotOut} value={gotOut} placeholder="00:00" ></InputField>
                  </label>
                </div>
              <div className="form__buttons__container">  
                <Button type="default" label="submit" text="send" action={e => sendData(e)} />
              </div>
              </form>
            
          </div>
          </>
  );
}


