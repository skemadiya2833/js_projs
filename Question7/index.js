// Given a string expression representing an expression of fraction addition and subtraction,
//  return the calculation result in string format. The final result should be an irreducible fraction. 
// If your final result is an integer
// , change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1. 
// Input: expression = "-1/2+1/2" 
// Output: "0/1"
function getGcd(a, b) {
  while (b != 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

function evaluateExp(str) {
  let numerator = 0, denominator = 1;
  let index = 0;

  while (index < str.length) {
    let isNegative = false;
    if (str.charAt(index) == '-' || str.charAt(index) == '+') {
        isNegative = str.charAt(index) == '-';
        index++;
    }
    let num = 0;
    while (index < str.length && str.charAt(index) >= '0' && str.charAt(index) <= '9') {
        num = num * 10 + +str.charAt(index);
        index++;
    }
    index++;
    let den = 0;
    while (index < str.length && str.charAt(index) >= '0' && str.charAt(index) <= '9') {
        den = den * 10 + +str.charAt(index) ;
        index++;
    }
    if (isNegative)
        num *= -1;

    numerator = numerator * den + num * denominator;
    denominator = denominator * den;

    let gcd = getGcd(numerator, denominator);
    numerator /= gcd;
    denominator /= gcd;
  }
  if (denominator < 0) {
      numerator *= -1;
      denominator *= -1;
  }
  return numerator + "/" + denominator;
}

console.log("-1/2+1/2 = "+evaluateExp("-1/2+1/2")); 
console.log("2/3-1/4 = "+evaluateExp("2/3-1/4")); 