function getDay(dateString) {
    const date = new Date(dateString);
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const getDayName = weekDays[date.getDay()];
    return getDayName;
  }

  
const date = '2023-06-18';
const getDayName = getDay(date);
console.log(getDayName);
