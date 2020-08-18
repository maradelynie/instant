import React from 'react';
import ItemRecord from './itemRecord';

export default function RecordsFrom(props) {
  const {records} = props
  const recordsToShow = records.sort((a,b) =>  b.date.slice(3,5)-a.date.slice(3,5))
  return (
    <>
      <h2>Records from {records[0].yearMonth}</h2>
      {recordsToShow.map(record => {
        return <ItemRecord key={record.id} data={record} setModal={props.setModal}/>
      })}
    </>
  );
}


