// Write a program to get all elements in an array that are greater than 10?

function elementsGreaterThanTen(arr){
    ans = [];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > 10)
            ans.push(arr[index]);
    }
    return ans ;
}

arr = [1,10,100,9,11,48,2,3,4,5,6,77,10] 

console.log("Greate than 10 : [ "+elementsGreaterThanTen(arr)+" ]");