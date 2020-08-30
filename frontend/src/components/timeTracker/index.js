import React, {useState, useEffect} from 'react';
import Button from '../button';
import { fortmatMilliTimer } from "../../utils";
import {TimerClock} from './style';
import './style.scss';


import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {addRecord} from "../../redux/actions";
import {useDispatch} from "react-redux";

export default function TimeTracker(props) {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(false)
  const [buttonLabel, setButtonLabel] = useState("start timer")
  const [timerStatus, setTimerStatus] = useState(false)
  const [buttonAction, setButtonAction] = useState()
  const [butonStyle, setButonStyle] = useState("attention")
  const [timer, setTimer] = useState(0)
  let dataToSend = {} 
  let interval

  const startTimer = () =>{
    dataToSend = {}
    dataToSend.gotIn = new Date().toString().split(" ")[4]

    setButonStyle("warning")
    setTimerStatus(true)
    const startTime = new Date();
    interval = setInterval(async() => {
      
      await setTimer(new Date()-startTime)
    },1000)

    setButtonLabel("stop for lunch")
    setButtonAction(()=>lunchBrake)
  }
  const lunchBrake = () =>{
    dataToSend.goneLunch = (new Date()).toString().split(" ")[4]

    setTimerStatus(false)

    window.clearInterval(interval);
    setButtonLabel("proceed timer")
    setButtonAction(()=>backLunch)
  }
  const backLunch = async () =>{
    dataToSend.backLunch = (new Date()).toString().split(" ")[4]

    setTimerStatus(true)

    setButonStyle("attention")
    let backTime

    await setTimer((latestTimerVal) => {
      backTime = new Date() - latestTimerVal;
      return latestTimerVal
    })
  
    interval = setInterval(async() => {
      await setTimer(new Date()-backTime) 
    },1000)
  
    setButtonLabel("go home")
    setButtonAction(() => goHome)
  }
  const goHome = () =>{

    dataToSend.gotOut = (new Date()).toString().split(" ")[4]
    dataToSend.date = new Date().toString()
    dataToSend.yearMonth = (new Date()).toString().split(" ")[1]+" "+(new Date()).toString().split(" ")[3]
    dataToSend.id= new Date().toString()
    
    

    window.clearInterval(interval);
    setTimer(0)
    setTimerStatus(false)

    setButtonLabel("start timer")
    setButtonAction(()=> startTimer );

    dispatch(addRecord(dataToSend))
  }
  const timeRecorded = () =>{
    setButtonLabel("time recorded")
    setDisabled(true)

  }
  const timeNotRecorded = () =>{
    setButtonLabel("start timer")
    setDisabled(false)
  }
  
  useEffect(() => {
    setButtonAction(()=> startTimer );
  }, [])
  
  useEffect(() => {
    if(props.recorded){
      timeRecorded()
    }else{
      timeNotRecorded()
    }
  }, [props.recorded])

  return (
    <>
      <div className="tracker__header">
        <h2>Time Tracker</h2>
        <TimerClock runing={timerStatus}>
          <FontAwesomeIcon className="icon__default" icon={faClock}/> 
          <span >{fortmatMilliTimer(timer)}</span>
        </TimerClock>
      </div>

      <div className="tracker__buttons">
        <Button disabled={disabled} kind={butonStyle} text={buttonLabel} action={buttonAction} />
        <Button kind="default" text="input time" action={e => props.setModal("input")} />
      </div>
    </>
  );
}


