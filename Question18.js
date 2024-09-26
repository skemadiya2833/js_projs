// Q18. Qiven an array of strings strs, group the anagrams together. Write a function to return the list of groups of anagrams.
function groupAnagrams(strs) {
  let map = {};
  for (let word of strs) {
    let sorted = word.split("").sort().join("");
    if (map[sorted]) {
      map[sorted].push(word);
    } else {
      map[sorted] = [word];
    }
  }
  let ans = [];
  for (let key of Object.keys(map)) {
    if (map[key].length > 1)
      ans.push(map[key]);
  }
  return ans;
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
//[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ] ]