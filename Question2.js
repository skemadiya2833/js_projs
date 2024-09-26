// Write a function to find the sum of an array of numbers.

function sumOfArray(arr){
    let ans = 0 ;
    for(let i = 0 ; i < arr.length ; ++i){
        ans += arr[i] ;
    }
    return ans ;
}
let arr = [1,3,3,5,7,5,6];
console.log("Sum of array: = "+arr+" is "+sumOfArray(arr));