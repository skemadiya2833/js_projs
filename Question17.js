// Implement a function isMatch(s: string, p: string): boolean that supports . and * and matches the string s against the pattern p.
function isMatch(s, p) {
   const res = s.match(p);
//    console.log(res);
   return res != null ;
}

console.log("Is match: " + isMatch("The quick brown fox jumps over the lazy dog. It barked.",/[A-Z][a-z]/g ));
console.log("Is match: " + isMatch("The quick brown fox jumps over the lazy dog. It barked.",/[0-9]/g ));