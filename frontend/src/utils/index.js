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
  return array.filter(element => element.attributes.kind.nodeValue==="bad").length!==0

}
export function getAllInputs () {
  const inputs = document.querySelectorAll('input');
  var arr = [];
  for(var i = inputs.length; i--; arr.unshift(inputs[i]));
  return arr

}

export function confirmWarning() {
  const warnings = searchWarning(getAllInputs());

  if(!warnings){
    return true
  }
  getAllInputs().forEach(input => {
    input.focus()
    input.blur()
  })
  return false
}

export function formatMoutData(data) {
  return data+":00"
}