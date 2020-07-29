import React from 'react';
import Button from './button';

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InputData(props) {
  return (<>
          <div className="main__card">
          <FontAwesomeIcon onClick={e=> props.setModal(false)} className="icon__close" icon={faTimes}/> 

          <h2>input record</h2>
            
              <form >
                <div className="form__edit">
                  <label className="label__edit">day
                    <input className="input__default" placeholder="day" desabled></input>
                  </label>
                  <label className="label__edit">start time
                    <input className="input__default" placeholder="start time" desabled></input>
                  </label>
                  <label className="label__edit">out for lunch
                    <input className="input__default" placeholder="out for lunch" desabled></input>
                  </label>
                  <label className="label__edit">back from lunch
                    <input className="input__default" placeholder="back from lunch" desabled></input>
                  </label>
                  <label className="label__edit">end time
                    <input className="input__default" placeholder="end time" desabled></input>
                  </label>
                </div>
              <div className="default__buttons">  
                <Button type="default" label="submit" text="send" action={e => console.log("send")} />
              </div>
              </form>
            
          </div>
          </>
  );
}


