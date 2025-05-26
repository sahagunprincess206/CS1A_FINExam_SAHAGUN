//2nd Code Problem No.2
//Single Dimensional Array that contains 2
let numbers = prompt().split(",").map(n => Number(n.trim()));
let names = prompt().split(",").map(n => n.trim());

// Here the Merge both arrays into a single array and log it to the console. 
let merged = numbers.concat(names);
console.log(merged);

// Sorting numbers numerically in reverse and log it using the console.log.
numbers.sort((a, b) => b - a);
console.log(numbers);

// Sort names in alphabetically and log it using the console.log
names.sort();
console.log(names);