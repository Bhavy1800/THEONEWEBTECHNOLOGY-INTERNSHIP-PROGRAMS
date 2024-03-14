// Program to demonstrate the use of switch statement, while loop, and do-while loop with break and continue

// Switch statement example
let day = new Date().getDay();
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown";
}

console.log("Today is " + dayName);

// While loop example
let i = 0;
while (i < 5) {
  console.log("While loop iteration: " + i);
  i++;
}

// Do-while loop example
let j = 0;
do {
  console.log("Do-while loop iteration: " + j);
  j++;
} while (j < 5);

// Break and continue example
for (let k = 0; k < 10; k++) {
  if (k === 3) {
    continue; // Skip current iteration
  }
  if (k === 7) {
    break; // Exit loop
  }
  console.log("Iteration: " + k);
}
