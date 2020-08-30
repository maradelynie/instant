import React from 'react';
import Button from '../button';

import './style.scss';

export default function TimeTracker(props) {
  if(!props.errorStatus){
    return <div></div>
  }
  return (
    <>
      <div className="modal__content">
        <div className="default__card">
          <div className="errorScreen__container">
            <h2 >Sorry!</h2>
            <p>{props.errorStatus}</p>
            <Button kind="attention" text="ok" action={e => props.setError(false)} />
          </div>
        </div>
      </div>
      <div  onClick={() => props.setError(false)} className="errorScreen__bg">
      </div>
    </>
  );
}


