// Synchronous code
console.log("Start");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("End");

// Asynchronous code
console.log("Start");
setTimeout(() => {
  console.log("Async operation completed");
}, 2000);
console.log("End");
