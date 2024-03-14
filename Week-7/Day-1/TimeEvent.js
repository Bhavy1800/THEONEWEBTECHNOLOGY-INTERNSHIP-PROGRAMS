// Timing Events (setTimeout)
setTimeout(() => {
  console.log("Delayed function executed");
}, 2000);

// Timing Events (setInterval)
let intervalId = setInterval(() => {
  console.log("Interval function executed");
}, 3000);

// Clear the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared after 10 seconds");
}, 10000);
