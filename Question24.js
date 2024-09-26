// . Write a function to generate the power set of a given set.
// Hint - 
// 	const set = new Set([1, 2, 3]);
// console.log(powerSet(set)); 
// Output: [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]

function powerSet(array) {
    const result = [[]];
    for (let value of array) {
        const length = result.length;
        for (let i = 0; i < length; i++) {
            let temp = result[i].slice(0);
            temp.push(value);
            result.push(temp);
        }
    }
    return result;
}

const set = new Set([1, 2, 3]);
console.log(powerSet(set));