// Write a function that calculates the number of business days (Monday through Friday) between two given dates, inclusive.
function getNoOfWorkingDays(startDate, endDate){  
    var count = 0;
    var curDate = startDate;
    while (curDate <= endDate) {
        var dayOfWeek = curDate.getDay();
        if(!((dayOfWeek == 6) || (dayOfWeek == 0))) count++;
        curDate.setDate(curDate.getDate() + 1);
    }
    return count ;
}

console.log("No of working days: ",getNoOfWorkingDays(new Date("2003-03-28"), new Date()));