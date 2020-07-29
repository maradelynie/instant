import React from 'react';
import Button from './button';

import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function timeTracker(props) {
  return (
    <>
      <div className="tracker__header">
        <h2>Time Tracker</h2>
        <span className="tracker__time">
          <FontAwesomeIcon className="icon__default" icon={faClock}/> 
          07:27:32
        </span>
      </div>

      <div className="tracker__buttons">
        <Button type="attention" text="start clock" action={e => console.log("start")} />
        <Button type="default" text="input time" action={e => props.setModal("input")} />
      </div>
    </>
  );
}


