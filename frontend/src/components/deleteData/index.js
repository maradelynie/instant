import React from 'react';
import Button from '../button';
import {deleteRecord} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {deleteRecordApi} from "../../api";

export default function DeleteData(props) {
  const dispatch = useDispatch();
  const {selectedItem} = useSelector(state => state);
  
  const confirmDelete = async () => {
    await deleteRecordApi(selectedItem._id)
    await dispatch(deleteRecord(selectedItem))
    props.setModal(false)
  }
   

  return (<>
          <div className="default__card">
            <FontAwesomeIcon onClick={()=> props.setModal(false)} className="icon__close" icon={faTimes}/> 

            <h2>Are you sure? </h2><h2> There is no come back.</h2>
            <div className="form__buttons__container">
              <Button kind="attention" type="submit" text="delete" action={confirmDelete} />
            </div>
          </div>
          </>
  );
}


