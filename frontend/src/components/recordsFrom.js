import React from 'react';
import ItemRecord from './itemRecord';

export default function RecordsFrom(props) {
  return (
    <>
      <h2>Records From 2020</h2>
      <ItemRecord setModal={props.setModal}/>
      <ItemRecord setModal={props.setModal}/>
      <ItemRecord setModal={props.setModal}/>
      <ItemRecord setModal={props.setModal}/>
      <ItemRecord setModal={props.setModal}/>
      <ItemRecord setModal={props.setModal}/>
      <ItemRecord setModal={props.setModal}/>
      <ItemRecord setModal={props.setModal}/>
      <ItemRecord setModal={props.setModal}/>
    </>
  );
}


