export function fortmatMilli (milliseconds){
  const diff = convertMS(milliseconds)
  return diff.hour+":"+(diff.minute<10?"0"+diff.minute: diff.minute);
}
export function fortmatMilliTimer (milliseconds){
  const diff = convertMS(milliseconds)
  return (diff.hour<10?"0"+diff.hour: diff.hour)+":"+(diff.minute<10?"0"+diff.minute: diff.minute)+":"+(diff.seconds<10?"0"+diff.seconds: diff.seconds);
}
function convertMS( milliseconds ) {
  var day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return {
      day: day,
      hour: hour,
      minute: minute,
      seconds: seconds
  };
}
export function timeDiference (start, end, date) {
  const FormatedStart = date.split(" ")
  FormatedStart[4] = start

  const FormatedEnd = date.split(" ")
  FormatedEnd[4] = end

  const startDate = new Date(FormatedStart.join(' '))
  const endDate = new Date(FormatedEnd.join(' '))
 
  return endDate-startDate

}
export function makeTwoAlgoritmsNumbers (number) {
  return number<10? "0"+number:number

}

export function searchWarning (array) {
  return array.filter(element => element.classList.contains("input__wrong")).length!==0

}
export function getAllInputs () {
  const inputs = document.querySelectorAll('input');
  var arr = [];
  for(var i = inputs.length; i--; arr.unshift(inputs[i]));
  return arr

}

export function setTimeValue(e) {
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
export function checkTimeValue(e) {
  e.target.classList.remove("input__wrong")

  const isHour = e.target.value.slice(0,2)<=23
  const isMinute = e.target.value.slice(3,5)<=59
  const isSize = e.target.value.length===5
  

  if(!isHour||!isMinute||!isSize){
    e.target.classList.add("input__wrong")
  }
}
export function checkDateValue(e) {
  e.target.classList.remove("input__wrong")
  
  const isNone = e.target.value===""

  if(isNone){
    e.target.classList.add("input__wrong")
  }
}

export function confirmWarning() {
  const warnings = searchWarning(getAllInputs())

  if(!warnings){
    return true
  }
  getAllInputs().forEach(input => {
    input.classList.remove("input__wrong")
    input.focus()
    input.blur()
  })
}