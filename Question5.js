// Write a program to check if all elements in an array are strings.(Utilize every() method)

function isItString(str){
    return typeof(str) === "string" ;
}

arr = ["hello", "hi", true, {hllo: "hi"}, [] , 12];
arr2 = ["hello", "hi", "true", "{hllo: 1}", "[]" , "12"];

console.log("Is it string: "+arr.every(isItString));
console.log("Is it string: "+arr2.every(isItString));