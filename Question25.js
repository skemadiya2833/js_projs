// 25. Write a function wordFrequency(sentence) that takes a string sentence as input and returns a Map
//  where keys are words and values are their frequencies in the sentence. Ignore case sensitivity (treat 'Word' and 'word' as the same).
function wordFrequency(sentence) {
    sentence = sentence.toLowerCase();
    let map = new Map();
    let words = sentence.split(" ");
    for(let word of words){
        map[word] = ( map[word] || 0 ) + 1 ;
    }
    return map ;
}

console.log(wordFrequency("Hello my name is Sunil Kemadiya I am a software engineer My name is Sunil"));