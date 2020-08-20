import React, {useState, useEffect} from 'react';
import Button from './button';
import { fortmatMilliTimer } from "../utils";


import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {setRecords,addRecord} from "../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

export default function TimeTracker(props) {
  const dispatch = useDispatch();
  const {records} = useSelector(state => state);

  const [buttonLabel, setButtonLabel] = useState("start timer")
  const [buttonClass, setButtonClass] = useState("tracker__time--stoped")
  const [buttonAction, setButtonAction] = useState()
  const [butonState, setButonState] = useState("true")
  const [butonStyle, setButonStyle] = useState("attention")
  const [timer, setTimer] = useState(0)
  let dataToSend = {}
  let interval

  const startTimer = () =>{
    dataToSend = {}
    dataToSend.gotIn = (new Date).toString()

    setButonStyle("warning")
    setButtonClass("tracker__time")
    const startTime = new Date;
    interval = setInterval(async() => {
      
      await setTimer(new Date-startTime)
    },1000)

    setButtonLabel("stop for lunch")
    setButtonAction(()=>lunchBrake)
  }
  const lunchBrake = () =>{
    dataToSend.goneLunch = (new Date).toString()

    setButtonClass("tracker__time--stoped")

    window.clearInterval(interval);
    setButtonLabel("proceed timer")
    setButtonAction(()=>backLunch)
  }
  const backLunch = async () =>{
    dataToSend.backLunch = (new Date).toString()

    setButtonClass("tracker__time")
    setButonStyle("attention")
    let backTime

    await setTimer((latestTimerVal) => {
      backTime = new Date - latestTimerVal;
      return latestTimerVal
    })
  
    interval = setInterval(async() => {
      await setTimer(new Date-backTime) 
    },1000)
  
    setButtonLabel("go home")
    setButtonAction(() => goHome)
  }
  const goHome = () =>{
    const month = new Date().getMonth()
    const day = new Date().getDate()
    const year = new Date().getFullYear()

    dataToSend.gotOut = (new Date).toString()
    dataToSend.date = (month<10? "0"+month:month)+"-"+(day<10? "0"+day:day)+"-"+year
    dataToSend.yearMonth = dataToSend.gotOut.slice(4,8)+dataToSend.gotOut.slice(11,15)
    dataToSend.id = 1

    window.clearInterval(interval);

    setTimer(0)
    setButtonClass("tracker__time--stoped");
    setButtonLabel("start timer")
    setButtonAction(()=> startTimer );

    dispatch(addRecord([dataToSend]))
  }
  const timeRecorded = () =>{
    setButtonLabel("time recorded")
    setButonState("disabled")
  }
  
  useEffect(() => {
    setButtonAction(()=> startTimer );
    
  }, [])
  useEffect(() => {
    if(props.recorded){
      timeRecorded()
    }
  }, [props.recorded])

 
  return (
    <>
      <div className="tracker__header">
        <h2>Time Tracker</h2>
        <span className={buttonClass}>
          <FontAwesomeIcon className="icon__default" icon={faClock}/> 
          {fortmatMilliTimer(timer)}
        </span>
      </div>

      <div className="tracker__buttons">
        <Button type={butonStyle} state={butonState} text={buttonLabel} action={buttonAction} />
        <Button type="default" text="input time" action={e => props.setModal("input")} />
      </div>
    </>
  );
}


