import React from 'react';

export default function Button(props) {
  const buttonType = () =>{
    if(props.type==="default"){
    return "button__default"
    }
  return "button__attention"
  }
  
  return (
    <button className={buttonType()} onClick={props.action}>{props.text}</button>
  );
}


