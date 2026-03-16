// FUNCTIONS IN JAVASCRIPT
//
// A function is a reusable block of code that performs a specific task.
// We write a function once and call it whenever we need that task.
//
// Benefits of functions:
// 1. Reduce repetition
// 2. Make code easier to read
// 3. Break a big problem into smaller parts
//
// Examples of built-in functions:
// console.log()
// prompt()
// Number()
//
// () are used to call or invoke a function.



// 1. SIMPLE FUNCTION

// This function does not take any input.
// It only prints a message.

function greetUser() {
    console.log("Hi! Vaibhav Sharma");
}

// Calling / invoking the function
greetUser();

// Output:
// Hi! Vaibhav Sharma



// 2. FUNCTION WITH A PARAMETER

// A parameter is a variable written inside the function definition.
// It receives the value that we pass when the function is called.

function showMessage(msg) {
    console.log(msg);
}

// "I love JavaScript!" is an argument.
// Argument = actual value passed during function call
showMessage("I love JavaScript!");



// 3. FUNCTION WITH MULTIPLE PARAMETERS

// x and y are parameters.
// They behave like local variables inside the function.
// Local variables can only be used inside that function.

function sum(x, y) {
    let result = x + y;
    return result;
}

// 3 and 4 are arguments
let val = sum(3, 4);
console.log(val);

// Output:
// 7



// 4. UNDERSTANDING PARAMETER VS ARGUMENT

// Parameter: variable in function definition
// Argument: actual value passed in function call
//
// Example:
// function printName(name) { ... }
//              ^ parameter
//
// printName("Vaibhav");
//           ^ argument



// 5. WHY FUNCTIONS ARE USEFUL

// Suppose we want to greet many users.
// Without functions, we would write console.log again and again.
// With a function, we can reuse the same logic.

function greetByName(name) {
    console.log("Hello, " + name);
}

greetByName("Vaibhav");
greetByName("Aman");
greetByName("Riya");



// 6. FUNCTION THAT RETURNS A VALUE

// console.log() shows output on the screen.
// return sends the result back to the place where the function was called.

function multiply(a, b) {
    return a * b;
}

let multipliedValue = multiply(5, 6);
console.log(multipliedValue);

// Output:
// 30



// 7. IMPORTANT POINTS

// 1. A function should be called to run.
// 2. Parameters are inputs of a function.
// 3. Arguments are actual values passed to the function.
// 4. return gives back a result.
// 5. Code inside a function runs only when the function is called.


// 8. ARROW FUNCTIONS

// Arrow functions are a shorter way to write functions in JavaScript.
// They use the => symbol.
//
// Syntax:
// const functionName = (parameters) => {
//     // code
// };

// Normal function
function addNumbers(a, b) {
    return a + b;
}

// Same logic using an arrow function
const addNumbersArrow = (a, b) => {
    return a + b;
};

console.log(addNumbersArrow(10, 20));

// Output:
// 30


// 9. ARROW FUNCTION WITH ONE PARAMETER

// If there is only one parameter, brackets are optional.

const square = n => {
    return n * n;
};

console.log(square(5));

// Output:
// 25


// 10. SHORT ARROW FUNCTION

// If there is only one statement to return,
// we can write it in a short form.

const cube = n => n * n * n;

console.log(cube(3));

// Output:
// 27


// 11. ARROW FUNCTION EXAMPLE

const sayHello = name => {
    console.log("Hello, " + name);
};

sayHello("Vaibhav");


// 12. IMPORTANT POINTS ABOUT ARROW FUNCTIONS

// 1. Arrow functions are a shorter syntax for functions.
// 2. They use the => symbol.
// 3. They are useful for small and simple functions.
// 4. If there is one parameter, () can be skipped.
// 5. If there is one return statement, {} and return can be skipped.
