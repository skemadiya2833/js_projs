// Write a function memoize that takes another 
// function as an argument and returns a memoized version of that function. 
// The memoized function should cache its results based on the arguments provided.

var memory = new Map();
function memoize(fn) {
    return function(arg) {
        if (memory.has(arg)) {
            console.log('using memory');
            return memory.get(arg);
        } else {
            var result = fn(arg);
            console.log('not using memory');
            memory.set(arg, result);
            return result;
        }
    };
}

var fn = (n) => 2 * n
var mmfn = memoize(fn)

console.log(fn(18));
console.log(mmfn(18));
console.log(mmfn(18));