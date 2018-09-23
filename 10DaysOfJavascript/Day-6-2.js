// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName;
  // Write your code here
  let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dateStr = dateString.split('\/');
  let stdDateStr = dateStr[2]+'\/'+dateStr[0]+'\/'+dateStr[1];
  dayName = daysInWeek[new Date(stdDateStr).getDay()];
  return dayName;
}