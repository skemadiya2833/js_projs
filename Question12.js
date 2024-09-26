// Write a function that uses reduce() to count the occurrences of each element in an array.

function countOccurrences(arr) {
    return arr.reduce((accu, next) => (accu[next] = (accu[next] || 0) + 1, accu), {});
}

console.log(countOccurrences(['a', 'b', 'c', 'd', 'e', 'w', 'a', 'c', 'c', 'a', 'a']));
// { a: 4, b: 1, c: 3, d: 1, e: 1, w: 1 }