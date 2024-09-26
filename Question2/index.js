// Create a function that can take an argument and return the type of the argument.
function getType(arg){
  return typeof(arg);
}

console.log("Type of String: "+getType("str"));
console.log("Type of integer: "+getType(1));
console.log("Type of float: "+getType(1.6));
console.log("Type of Object: "+getType({ "hello": "hi" }));
console.log("Type of Array: "+getType([12, 43, "hi", true ]));