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