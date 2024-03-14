// Promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  }, 2000);
});

promise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
