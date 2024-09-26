// Write a function that returns the difference between two arrays, i.e., values that are present in one array but not the other. 
const arr1 = [1, 2, 3, 4]
const arr2= [3, 4, 5, 6]
// outputArr= [1, 2, 5, 6]
function findDifference(arr1, arr2) {
    const difference = [];
    for(let i = 0 ; i < arr1.length ; ++i){
        if(arr2.indexOf(arr1[i]) == -1 ) difference.push(arr1[i]); 
    }
    for(let i = 0 ; i < arr2.length ; ++i){
        if(arr1.indexOf(arr2[i]) == -1 ) difference.push(arr2[i]); 
    }
    return difference ;
  }

const outputArr = findDifference(arr1, arr2);
console.log(outputArr);

