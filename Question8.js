// Write a program  to concatenate an array of strings in reverse order. (Use reduceRight())

arr = ["Hello", "Sunil", "is", "My", "Name"];

const result = arr.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
);

console.log(result);