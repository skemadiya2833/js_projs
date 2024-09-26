// Write a function that uses flatMap() to split an array of strings by spaces and flatten the result.

const arr = ["hello", "hy hi", "hello qlo", "lol lol"];

const ans = arr.flatMap((str) => str.split(" "));

console.log("After flatMap =  " + ans)