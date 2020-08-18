import React,{useState, useEffect} from 'react';
import TimeTracker from './timeTracker';
import RecordsFrom from './recordsFrom';
import BgAnimation from './bgAnimation';
import recordsJson from '../mock/records.json';


export default function MainContent(props) {
const [records, setRecords] = useState(recordsJson)
const [recorded, setRecorded] = useState(false)

  function addRecord(data) {
    setRecords((actual)=>{
      checkTodayRecord([...actual,data])
      return [...actual,data]})
    
  }
  function checkTodayRecord(data) {
    console.log(data)
    const today = (new Date).toString()
    const findToday = data.filter(element => {
      return element.gotOut.slice(0,15)==today.slice(0,15)
    });
    if(findToday.length>0){
      console.log("trueeee")
      setRecorded(true)
    }
  }

  useEffect(() => {
    checkTodayRecord(records)
  }, [])

  return (
    <main className="main__container">
      <div className="main__animation"><BgAnimation/></div>
      <div className="main__card"><TimeTracker recorded={recorded} addRecord={addRecord} setModal={props.setModal} /></div>
      <div className="main__card"><RecordsFrom records={records} setModal={props.setModal} /></div>
    </main>
  );
}


