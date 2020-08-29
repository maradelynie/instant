import React,{useState, useEffect} from 'react';
import TimeTracker from '../timeTracker';
import RecordsFrom from '../recordsFrom';
import BgAnimation from '../bgAnimation';
import {setRecords} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import './style.scss';

import {getRecords} from "../../api";
// import recordsJson from '../../mock/records.json';

export default function MainContent(props) {
  const dispatch = useDispatch();
  const {records} = useSelector(state => state);

  const [recorded, setRecorded] = useState(false)

  function checkTodayRecord(data) {
    const today = new Date().toString()

    const findToday = data.filter(element => {
      return formateDateToCompare(element.date)===formateDateToCompare(today)
    });

    if(findToday.length>0){
      return setRecorded(true)
    }
    setRecorded(false)
  }
  
  const formateDateToCompare = (data) => {
    const arr = data.split(" ")
    arr[4]= "00:00:00"

    return arr.slice(0,4).toString()

  }

  useEffect(() => {
    const getBdData = async () => {
      const data = await getRecords("")
      dispatch(setRecords(data.records))
    }
    getBdData()
    
  }, [dispatch])
  
  useEffect(() => {
    if(records!==[]){
      checkTodayRecord(records)
    }
  }, [records])

  return (
    <main className="main__container">
      <div className="main__animation"><BgAnimation/></div>
      <div className="default__card"><TimeTracker recorded={recorded} setModal={props.setModal} /></div>
      <div className="default__card"><RecordsFrom setModal={props.setModal} /></div>
    </main>
  );
}


