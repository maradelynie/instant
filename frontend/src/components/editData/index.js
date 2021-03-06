import React,{useState} from 'react';
import Button from '../button';
import InputField from "../inputField";
import {updateRecord} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {confirmWarning,formatMoutData} from "../../utils";
import './style.scss';

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {editRecordApi} from "../../api";

export default function EditData(props) {
  const dispatch = useDispatch();
  const {selectedItem} = useSelector(state => state);
  
  const [gotIn, setGotIn] = useState(selectedItem.gotIn.slice(0,-3))
  const [goneLunch, setGoneLunch] = useState(selectedItem.goneLunch.slice(0,-3))
  const [backLunch, setBackLunch] = useState(selectedItem.backLunch.slice(0,-3))
  const [gotOut, setGotOut] = useState(selectedItem.gotOut.slice(0,-3))

  const sendUpdate = async (e) => {
    e.preventDefault()
    
    const data = mountDataEdit()
    
    if(confirmWarning()){
      try{

        const resp = await editRecordApi(data,selectedItem._id)
        const newData = resp.newData
        newData.date = new Date(newData.date).toString()
        await dispatch(updateRecord(newData))
        props.setModal(false) 

      }catch{
        props.setModal(false)
        return props.setError("Something went wrong editing this record, please try again later.")
      }
      
    }
    
  }

  const mountDataEdit = () => {
    const data = {}

    data.gotIn = formatMoutData(gotIn)
    data.goneLunch = formatMoutData(goneLunch)
    data.backLunch = formatMoutData(backLunch)
    data.gotOut = formatMoutData(gotOut)

    return data
  }
  
  return (<>
          <div className="default__card">
          <FontAwesomeIcon onClick={e=> props.setModal(false)} className="icon__close" icon={faTimes}/> 

          <h2>Edit {selectedItem.date.split(" ")[1]+" "+selectedItem.date.split(" ")[2]+" "+selectedItem.date.split(" ")[3]}</h2>
            
              <form >
                <div className="form__edit">
                  <label className="label__edit">start time
                    <InputField className="input__default" onChange={setGotIn} value={gotIn} ></InputField>
                  </label>
                  <label className="label__edit">out for lunch
                    <InputField className="input__default" onChange={setGoneLunch} value={goneLunch} ></InputField>
                  </label>
                  <label className="label__edit">back from lunch
                    <InputField className="input__default"  onChange={setBackLunch} value={backLunch} ></InputField>
                  </label>
                  <label className="label__edit">end time
                    <InputField className="input__default" onChange={setGotOut} value={gotOut} ></InputField>
                  </label>
                </div>
              <div className="form__buttons__container">  
                <Button type="default" label="submit" text="edit" action={e => sendUpdate(e)} />
              </div>
              </form>
            
          </div>
          </>
  );
}


