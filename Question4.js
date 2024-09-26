// Write a program to check if there is at least one even number in an array.

function isEvenPresent(arr){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] % 2 == 0 ) return true ;
    }
    return false ;
}

console.log("isEvenPresent = "+isEvenPresent([1,2,3,4,6,5,6,5,6,]));
console.log("isEvenPresent = "+isEvenPresent([1,3,5,7,9,11,13,15]));