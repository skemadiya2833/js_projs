// Write a function that calculates the tenure of an employee given their start date and optionally an end date. 
// The function should return the tenure in the format of "X years, Y months, Z days". 
// If the end date is not provided, the function should use the current date.

function calculateTenure(startDate, endDate = new Date()) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if(end < start) throw new Error("Start date should be before than end date");
    const timeDiff = end.getTime() - start.getTime();

    const oneDay = 1000 * 60 * 60 * 24;

    const oneYear = oneDay * 365;

    const oneMonth = oneDay * 28;

    const years = Math.floor(timeDiff / oneYear);
    const remainingDays = timeDiff % oneYear;
    const months = Math.floor(remainingDays / oneMonth);
    const days = Math.floor((remainingDays % oneMonth) / oneDay);
    return years+" years, "+months+" months, "+days+" days";
}


const startDateStr = "2003-03-28";
const endDateStr = "2024-06-17";

console.log(calculateTenure(startDateStr, endDateStr));

console.log(calculateTenure(startDateStr)); 
