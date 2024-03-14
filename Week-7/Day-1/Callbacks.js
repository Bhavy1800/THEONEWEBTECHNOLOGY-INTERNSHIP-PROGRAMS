// Callback Function
function fetchData(callback) {
  setTimeout(() => {
    let data = "Data fetched successfully";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("Processing data:", data);
}

fetchData(processData);
