import React from 'react';
import ItemRecord from './itemRecord';
import {useSelector} from "react-redux";


export default function RecordsFrom(props) {
  const {records} = useSelector(state => state);
  console.log(records)
  const recordsToShow = records.sort((a,b) =>  b.date.slice(3,5)-a.date.slice(3,5))

  return (
    <>
      <h2>Records from {records[0]?.yearMonth}</h2>
      {recordsToShow?.map(record => {
        return <ItemRecord key={record.gotOut} data={record} setModal={props.setModal}/>
      })}
    </>
  );
}


