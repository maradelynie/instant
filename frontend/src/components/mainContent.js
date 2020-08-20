import React,{useState, useEffect} from 'react';
import TimeTracker from './timeTracker';
import RecordsFrom from './recordsFrom';
import BgAnimation from './bgAnimation';
import recordsJson from '../mock/records.json';
import {setRecords} from "../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";



export default function MainContent(props) {
  const dispatch = useDispatch();
  const {records} = useSelector(state => state);

  const [recorded, setRecorded] = useState(false)

  function checkTodayRecord(data) {
    const today = (new Date).toString()
    const findToday = data.filter(element => {
      return element.gotOut.slice(0,15)==today.slice(0,15)
    });
    if(findToday.length>0){
      setRecorded(true)
    }
  }

  useEffect(() => {
    dispatch(setRecords(recordsJson))
  }, [])
  
  useEffect(() => {
    if(records!==[]){
      checkTodayRecord(records)
    }
  }, [records])

  return (
    
    <main className="main__container">
      <div className="main__animation"><BgAnimation/></div>
      <div className="main__card"><TimeTracker recorded={recorded} setModal={props.setModal} /></div>
      <div className="main__card"><RecordsFrom setModal={props.setModal} /></div>
    </main>
  );
}


