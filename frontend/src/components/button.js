import React from 'react';

export default function Button(props) {
  const buttonType = () =>{
    if(props.type==="default"){
      return "button__default"
    }else if(props.type==="warning"){
      return "button__warning"
    }
  return "button__attention"
  }

  const buttonStatus = () =>{
    if(props.state==="disabled"){
      return true
    }
  return false
  }
  
  return (
    <button className={buttonType()} disabled={buttonStatus()} type={props.label} onClick={props.action}>{props.text}</button>
  );
}


