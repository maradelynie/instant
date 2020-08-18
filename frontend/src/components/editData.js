import React from 'react';
import Button from './button';

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditData(props) {
  return (<>
          <div className="main__card">
          <FontAwesomeIcon onClick={e=> props.setModal(false)} className="icon__close" icon={faTimes}/> 

          <h2>Edit record</h2>
            
              <form >
                <div className="form__edit">
                  <label className="label__edit">day
                    <input className="input__default" placeholder="day" ></input>
                  </label>
                  <label className="label__edit">start time
                    <input className="input__default" placeholder="start time" ></input>
                  </label>
                  <label className="label__edit">out for lunch
                    <input className="input__default" placeholder="out for lunch" ></input>
                  </label>
                  <label className="label__edit">back from lunch
                    <input className="input__default" placeholder="back from lunch" ></input>
                  </label>
                  <label className="label__edit">end time
                    <input className="input__default" placeholder="end time" ></input>
                  </label>
                </div>
              <div className="default__buttons">  
                <Button type="default" label="submit" text="edit" action={e => console.log("edit")} />
              </div>
              </form>
            
          </div>
          </>
  );
}


