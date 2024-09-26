// Write a function that calculates the number of full weeks between two dates.
function calculateFullWeeks(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const timeDiff = end.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const oneWeek = oneDay * 7;
    const weeks = Math.floor(timeDiff / oneWeek);
    return weeks;
}

const startDateStr = "2003-03-28";
const endDateStr = "2024-07-10";

const weeksBetween = calculateFullWeeks(startDateStr, endDateStr);
console.log(weeksBetween); 
