// Callback Hell (Nested Callbacks)
function asyncFunction(callback) {
  setTimeout(() => {
    console.log("Async function completed");
    callback();
  }, 2000);
}

function asyncFunction2(callback) {
  setTimeout(() => {
    console.log("Async function 2 completed");
    callback();
  }, 1000);
}

asyncFunction(() => {
  asyncFunction2(() => {
    console.log("All async functions completed");
  });
});
