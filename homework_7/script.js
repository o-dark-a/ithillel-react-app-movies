// Task 1

// Write a parseDate() function that shows the current date and time clearly in the specified format.
// Today is: Thursday.
// Current time is: 10 PM : 03 : 07

function parseDate() {

  const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const currentDate = new Date();
  const [weekDayIndx, hour, minutes, seconds] = [
    currentDate.getDay(),
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getSeconds(),
  ];
  const meridiemSign = (hour >= 12 && hour <= 23) ? 'PM' : 'AM';
  const weekDayName = weekDays[weekDayIndx];
  
  console.log(`Today is: ${weekDayName}.\nCurrent time is: ${hour} ${meridiemSign} : ${minutes} : ${seconds}`);
  
}

parseDate();
