// Write a program to `filter() and map() to first filter out odd numbers and then double the even numbers in an array.

arr = [1, 2, 3, 4, 5, 6, 7, 9, 8];

const oddFilter = arr.filter((elem) => elem % 2 === 0);

console.log("After filter: " + oddFilter);

const result = oddFilter.map((val) => val * 2);

console.log("After map: " + result);