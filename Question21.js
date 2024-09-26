// Write a function that finds the next occurrence of a given day of the week after a specified date. 
// The day of the week is represented by an integer (0 for Sunday, 1 for Monday, ..., 6 for Saturday).

function getNext(date, dayOfWeek) {
    const dateObj = new Date(date);
    const currentDay = dateObj.getDay();
    const daysToAdd = (dayOfWeek - currentDay + 7) % 7;
    dateObj.setDate(dateObj.getDate() + daysToAdd);
    return dateObj.toLocaleDateString();
}

console.log("Day of week next occurance is "+getNext("2003-03-28", 3)); // O/p: Day of week next occurance is 4/2/2003