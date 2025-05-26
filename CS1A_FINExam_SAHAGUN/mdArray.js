//3rd Code Problem No.3: Named Mutli Dimensional Array
//Creating a multi-dimensional using prompt() function.
let subArray1 = prompt().split(",").map(n => n.trim());
let subArray2 = prompt().split(",").map(n => Number(n.trim()));

//Restructure ro declared the array above the [name, age]
let restructured = [];
for (let i = 0; i < subArray1.length; i++) {
  restructured.push([subArray1[i], subArray2[i]]);
}

//Using console.log to restructure the [name, age] per line
for (let pair of restructured) {
  console.log(pair);
}