//4th Coding Problem No.4: grocery items
//Creating an empty array that accepts five (5) grocery item using the promt() funtion to let the user input
let stack = [];

// Create a peek function to check if the current stack’s size is empty or not, then return the value. See if the peek function is invoked in teh push and pop function.
function peek() {
  if (stack.length === 0) {
    return "Stack is empty";
  }
  return stack[stack.length - 1];
}

//In this second part of code  Create a push function which will receive a parameter (item).  Which will be added at the back or top of the array.
function push(item) {
  stack.push(item);
  console.log("Peek:", peek());
  console.log("Stack:", stack);
}

// Then Create a pop function which will remove the last added item in the array.
function pop() {
  if (stack.length === 0) {
    console.log("Stack is empty. Nothing to pop.");
    return;
  }
  stack.pop();
  console.log("Peek:", peek());
  console.log("Stack:", stack);
}

//Ise the prompt to accept the 5 grocery item to push them into the stack.
for (let i = 0; i < 5; i++) {
  let item = prompt();
  push(item);
}