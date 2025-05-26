//String Array Operations called Palindrome By declaring 2 Variables
//we use prompt to let the user input 
// first Code Problem No.1 
let word1 = prompt();
let word2 = prompt();

//Use Console.log to print out the output and let the user input
console.log(word1);
console.log(word2);

//Use console.log by returning the truth table to see if the string is equivalent to the reversed string
console.log(word1.split("").reverse().join(""));
console.log(word1 === word1.split("").reverse().join(""));

console.log(word2.split("").reverse().join(""));
console.log(word2 === word2.split("").reverse().join(""));