import React,{useState, useEffect} from 'react';
import TimeTracker from '../timeTracker';
import RecordsFrom from '../recordsFrom';
import BgAnimation from '../bgAnimation';
import recordsJson from '../../mock/records.json';
import {setRecords} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";



export default function MainContent(props) {
  const dispatch = useDispatch();
  const {records} = useSelector(state => state);

  const [recorded, setRecorded] = useState(false)

  function checkTodayRecord(data) {
    const today = new Date().toString()
    const findToday = data.filter(element => {
      return formateTodayData(element.date)===formateTodayData(today)
    });

    if(findToday.length>0){
      return setRecorded(true)
    }

    setRecorded(false)
  }
  const formateTodayData = (data) => {
    const arr = data.split(" ")
    arr[4]= "00:00:00"

    return arr.slice(0,4).toString()

  }

  useEffect(() => {
    dispatch(setRecords(recordsJson))
  }, [dispatch])
  
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


