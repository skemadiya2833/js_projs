// Write a program to locate the index of the first negative number in an array.

function firstNegativeIndex(arr){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] < 0) return index ;
    }
    return -1 ;
}

arr = [1,2,9,4,8,1,2,2,5,7,6,-1,1,2,5,6];

console.log("Index of first Negative value: "+firstNegativeIndex(arr));