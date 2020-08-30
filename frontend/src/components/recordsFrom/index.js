import React, {useEffect,useState} from 'react';
import ItemRecord from '../itemRecord';
import {useSelector} from "react-redux";

import './style.scss';

export default function RecordsFrom(props) {
  const {records} = useSelector(state => state);
  const [recordsToShow, setRecordsToShow] = useState([])

  useEffect(() => {
    setRecordsToShow([])
    filterDays()
  }, [records])
  
  const filterDays = async () => {
    const period = records.map(record => record.yearMonth).filter((period, index, self)=> self.indexOf(period) === index)
    for (var i = 0; i < period.length; i++) {
      const recordsFrom = records.filter(record => record.yearMonth===period[i])
      setRecordsToShow(recordsToShow => {
        return [...recordsToShow, recordsFrom];

      })

   }
  }

  return (
    recordsToShow?.map((records) =>{
      return (<div key={records[0].yearMonth}>
      <h2  className="recordsFrom__title">Records from {records[0].yearMonth}</h2>
        {records?.map(record => {
        return <ItemRecord key={record._id} data={record} setModal={props.setModal}/>
      })}
      </div>)
    }
  ))
}


