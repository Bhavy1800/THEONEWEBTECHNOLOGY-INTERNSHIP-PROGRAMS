// Ajax call using XMLHttpRequest
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error("Request failed:", xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error("Request failed");
};
xhr.send();
