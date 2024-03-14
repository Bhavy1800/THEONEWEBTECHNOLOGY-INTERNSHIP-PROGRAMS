// Hoisting
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// Scope
function outer() {
  var y = 10;

  function inner() {
    console.log(y); // Accessible due to closure
  }

  inner();
}

outer(); // Output: 10
