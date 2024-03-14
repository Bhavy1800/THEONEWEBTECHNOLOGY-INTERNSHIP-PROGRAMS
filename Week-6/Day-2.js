// Array methods example
let numbers = [5, 3, 9, 1, 7, 4, 8, 2, 6];

// Traversal
numbers.forEach((num) => console.log(num));

// Searching
let indexOfSeven = numbers.indexOf(7);
console.log("Index of 7:", indexOfSeven);

// Filter
let filteredNumbers = numbers.filter((num) => num > 5);
console.log("Filtered numbers:", filteredNumbers);

// Sort
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers);

// CRUD (Create, Read, Update, Delete)
numbers.push(10); // Create
console.log("Array after push:", numbers);

console.log("Element at index 2:", numbers[2]); // Read

numbers[1] = 12; // Update
console.log("Array after update:", numbers);

numbers.splice(3, 1); // Delete
console.log("Array after delete:", numbers);

// Map
let doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers:", doubledNumbers);

// Reduce
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);
