//var variable can be re-assigned and re-declared. A global variable can be declared with var, and it will be available throughout the entire program. However, it is generally recommended to use let and const instead of var to avoid potential issues with variable hoisting and scope.
var name = "Vaibhav";
console.log(name)
var name = "John";
console.log(name)






//let variable can be re-assigned but cannot be re-declared. A block-scoped variable can be declared with let, and it will only be available within the block it was declared in.
let age = 25;
console.log(age)
age = 30;
console.log(age)
// let age = 35; // This will throw an error because we cannot re-declare a variable declared with let.






//const variable cannot be re-assigned or re-declared. A block-scoped constant can be declared with const, and it will only be available within the block it was declared in.
const pi = 3.14;
console.log(pi)
// pi = 3.14159; // This will throw an error because we cannot re-assign a variable declared with const.
// const pi = 3.14159; // This will also throw an error because we cannot re-declare a variable declared with const.
//const variables must be initialized at the time of declaration, and their value cannot be changed later in the program.