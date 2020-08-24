import React from 'react';
import Button from '../button';
import {deleteRecord} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function DeleteData(props) {
  const dispatch = useDispatch();
  const {selectedItem} = useSelector(state => state);
  
  const confirmDelete = async () => {
    await dispatch(deleteRecord(selectedItem))
    props.setModal(false)
  }

  return (<>
          <div className="main__card">
            <FontAwesomeIcon onClick={e=> props.setModal(false)} className="icon__close" icon={faTimes}/> 

            <h2>Are you sure? </h2><h2> There is no come back.</h2>
            <div className="default__buttons">
              <Button type="attention" text="delete" action={confirmDelete} />
            </div>
          </div>
          </>
  );
}


