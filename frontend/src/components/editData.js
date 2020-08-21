import React,{useState} from 'react';
import Button from './button';
import {updateRecord} from "../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import { makeTwoAlgoritmsNumbers,getAllInputs, searchWarning} from "../utils";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const setTimeValue = (e) => {
  e.persist()
  const value = e.target.value
  const isNumber = !isNaN(value.slice(-1))
  const isSize = value.length<=5
  
  if(isNumber){
    if(isSize){
      if(value.length===2){
        return  value +":"
      }else if(value.length===3 && e.nativeEvent.inputType!=="deleteContentBackward"){
        return value.slice(0,-1)+":"+value.slice(-1)
      }else{
        return value
      }
    }else if(value.slice(-1)===":"){
      return value.slice(0,value.length-1)
  }
  
}
return value.slice(0,-1)
}

export default function EditData(props) {
  const dispatch = useDispatch();
  const {selectedItem} = useSelector(state => state);
  
  const [gotIn, setGotIn] = useState(selectedItem.gotIn.slice(0,-3))
  const [goneLunch, setGoneLunch] = useState(selectedItem.goneLunch.slice(0,-3))
  const [backLunch, setBackLunch] = useState(selectedItem.backLunch.slice(0,-3))
  const [gotOut, setGotOut] = useState(selectedItem.gotOut.slice(0,-3))

  const sendUpdate = async (e) => {
    e.preventDefault()
    const warnings = searchWarning(getAllInputs())

    if(!warnings){
      
      const data = selectedItem;

      data.gotIn = gotIn+":00"
      data.goneLunch = goneLunch+":00"
      data.backLunch = backLunch+":00"
      data.gotOut = gotOut+":00"

      // receber o id e incrementar antes de enviar para a lista

      await dispatch(updateRecord(selectedItem))
      props.setModal(false)

    }else {
      getAllInputs().forEach(input => {
        input.classList.remove("input__wrong")
        input.focus()
        input.blur()
      })
    }
  }
  
  const checkTimeValue =  (e) => {
    e.target.classList.remove("input__wrong")

    const isHour = e.target.value.slice(0,2)<=23
    const isMinute = e.target.value.slice(3,5)<=59
    const isSize = e.target.value.length===5

    if(!isHour||!isMinute||!isSize){
      e.target.classList.add("input__wrong")
    }
  }

 
  return (<>
          <div className="main__card">
          <FontAwesomeIcon onClick={e=> props.setModal(false)} className="icon__close" icon={faTimes}/> 

          <h2>Edit record {selectedItem.date.split(" ")[1]+" "+selectedItem.date.split(" ")[2]+" "+selectedItem.date.split(" ")[3]}</h2>
            
              <form >
                <div className="form__edit">
                  <label className="label__edit">start time
                    <input className="input__default" onBlur={e => checkTimeValue(e)} onChange={e => setGotIn(setTimeValue(e))} value={gotIn} ></input>
                  </label>
                  <label className="label__edit">out for lunch
                    <input className="input__default" onBlur={e => checkTimeValue(e)} onChange={e => setGoneLunch(setTimeValue(e))} value={goneLunch} ></input>
                  </label>
                  <label className="label__edit">back from lunch
                    <input className="input__default" onBlur={e => checkTimeValue(e)} onChange={e => setBackLunch(setTimeValue(e))} value={backLunch} ></input>
                  </label>
                  <label className="label__edit">end time
                    <input className="input__default" onBlur={e => checkTimeValue(e)} onChange={e => setGotOut(setTimeValue(e))} value={gotOut} ></input>
                  </label>
                </div>
              <div className="default__buttons">  
                <Button type="default" label="submit" text="edit" action={e => sendUpdate(e)} />
              </div>
              </form>
            
          </div>
          </>
  );
}


