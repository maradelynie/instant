import React from 'react';
import ItemRecord from '../itemRecord';
import {useSelector} from "react-redux";


export default function RecordsFrom(props) {
  const {records} = useSelector(state => state);
  const recordsToShow = records.sort((a,b) =>  b.date.split(" ")[2]-a.date.split(" ")[2])

  return (
    <>
      <h2>Records from {records[0]?.yearMonth}</h2>
      {recordsToShow?.map(record => {
        return <ItemRecord key={record.id} data={record} setModal={props.setModal}/>
      })}
    </>
  );
}


