import React,{useState} from 'react';

import {Input} from './styles';

export default function InputField(props) {
  const [kind, setKind] = useState(props.type==="date"?"bad":"good")

  function blurFunction(e) {
    setKind("good")

    if(props.type==="date"){
      
      return checkDateValue(e)
    }
      return checkTimeValue(e)
    
  } 
  function onchangeFunction(e) {
    if(props.type==="date"){
      return props.onChange(e.target.value)
    }
      return props.onChange(setTimeValue(e.target.value))
    
  } 
  function checkDateValue(e) {
    const isNone = e.target.value===""
    if(isNone){
      setKind("bad")
      
    }
  } 
  function checkTimeValue(e) {
  
    const isHour = e.target.value.slice(0,2)<=23
    const isMinute = e.target.value.slice(3,5)<=59
    const isSize = e.target.value.length===5
    
  
    if(!isHour||!isMinute||!isSize){
      setKind("bad")
    }
  }
  function setTimeValue(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1:$2')
      .replace(/(\d{2})(\d)/, '$1')
  }
  
  return (
    <Input kind={kind} type={props.type} onBlur={e => blurFunction(e)} onChange={e => onchangeFunction(e)} value={props.value} placeholder={props.placeholder}/>
  );
}


