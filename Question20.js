// Write a function that formats a given date to a specified time zone. The function should return the date and time in YYYY-MM-DD HH:mm:ss format.

function getZonedDate(date, timeZone) {
    return date.toLocaleString('en-US',{timeZone}); 
}

function format(date, timezone) {
    date = new Date(getZonedDate(date, timezone));
    const year = date.getFullYear();
    let month = date.getMonth() + 1 ;
    if(month < 10) month = "0"+month ;
    let day = date.getDate();
    if(day < 10) day = "0"+day ;
    let hours = date.getHours();
    if(hours < 10) hours = "0"+hours ;
    let minutes = date.getMinutes();
    if(minutes < 10) minutes = "0"+minutes ;
    let seconds = date.getSeconds()
    if(seconds < 10) seconds = "0"+seconds ;
    
    return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
}

console.log("Formated date = "+format(new Date(), 'America/New_York'));
console.log("Formated date = "+format(new Date("2003-03-28"), 'Poland'));
console.log("Formated date = "+format(new Date("2003-03-28"), 'US/Central'));
console.log("Formated date = "+format(new Date("2003-03-28"), 'Canada/Yukon'));
console.log("Formated date = "+format(new Date("2003-03-28"), 'Asia/Dubai'));
console.log("Formated date = "+format(new Date("2003-03-28"), 'GMT'));

// output:
// Formated date = 2024-07-12 03:28:28
// Formated date = 2003-03-28 01:00:00
// Formated date = 2003-03-27 18:00:00
// Formated date = 2003-03-27 16:00:00
// Formated date = 2003-03-28 04:00:00
// Formated date = 2003-03-28 00:00:00