// Higher Order Function
function greet(name) {
  return function (message) {
    console.log(`Hello, ${name}! ${message}`);
  };
}

let greetJohn = greet("John");
greetJohn("How are you?");
