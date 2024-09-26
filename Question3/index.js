// Write a function that finds the longest contiguous subarray with a sum of zero.

function findLongestZeroSum(arr) {
  let maxLength = 0;
  let startIndex = 0;
  let currentSum = 0;
  const seen = new Map(); 

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (seen.has(currentSum)) {
      const prevIndex = seen.get(currentSum);
      const length = i - prevIndex;
      if (length > maxLength) {
        maxLength = length;
        startIndex = prevIndex + 1;
      }
    } else {
      seen.set(currentSum, i);
    }
  }
  if (maxLength > 0) {
    return arr.slice(startIndex, startIndex + maxLength);
  } else {
    return [];
  }
}

const inp = [1, 2, -3, 3, -1, -3, 3, 1, 6, -6]
const result = findLongestZeroSum(inp);

console.log(result);
// Output array = [-1, -3, 3, 1]
