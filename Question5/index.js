// Write a function that removes all falsy values (false, null, 0, "", undefined, and NaN) from an array
// output =  [1, 2, 3]
let inputEx = [0, 1, false, 2, '', 3]
function removeFalsyValues(arr){
    let ans = [];
    for(let i = 0 ; i < arr.length; ++i ){
        if(inputEx[i]){
            ans.push(inputEx[i]);
        }
    }
    return ans ;
}

const ans = removeFalsyValues(inputEx);
console.log(ans);