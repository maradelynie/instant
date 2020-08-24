import React from 'react';

import {TimerTrigger} from './styles';

export default function Button(props) {
  const colorText= "#fff";
  const coloPrincipal = "#858AE3";
  const coloSecundary = "#ED254E";
  const colorDifferent= "#F2D202";
  
  const setButtonKind = () =>{
    if(props.kind==="attention"){
      return coloSecundary
    }else if(props.kind==="warning"){
      return colorDifferent
    }
    return coloPrincipal
  }
  const buttonStatus = () =>{
    if(props.state==="disabled"){
      return true
    }
  return false
  }
  
  return (
    <TimerTrigger disabled={buttonStatus()} colorText={colorText} buttonColor={setButtonKind()} type={props.label} onClick={props.action}>{props.text}</TimerTrigger>
  );
}


