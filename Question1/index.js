// Point out differences among let, const and var with examples(description/differences could be added as comments).

// VAR:
function exampleVar() {
    if (true) {
      var x = 10;
    }
    console.log(x); // Outputs 10
  }
  
exampleVar();
//   In this example, x is declared using var inside the if block, but it is still accessible outside 
// the block when we log it to the console.

// LET:
function exampleLet() {
    if (true) {
      let y = 20;
    }
    try {
        console.log(y); // Throws a ReferenceError: y is not defined
    } catch (error) {
        console.log("Error= "+error);
    }
  }
  
exampleLet();
//   In this example, y is declared using let inside the
//    if block, and it is not accessible outside the block. Attempting to log y outside the block results in a ReferenceError.

// CONST: 
function exampleConst() {
    const z = 30;
    console.log(z)
    z = 40; // Throws a TypeError: Assignment to constant variable
    console.log(z)
  }
  
exampleConst();