// `var` variables can be redeclared and reassigned.
// When declared at the top level, `var` creates a global variable.
var name = "Vaibhav";
console.log(name);
var name = "John";
console.log(name);

console.log("\n");

// `let` variables can be reassigned but cannot be redeclared in the same scope.
// `let` is block-scoped, so it is only available inside the block where it is defined.
let age = 25;
console.log(age);
age = 30;
console.log(age);
// let age = 35; // This would cause an error because `let` cannot be redeclared.

console.log("\n");

// `const` variables cannot be reassigned or redeclared.
// Like `let`, `const` is block-scoped.
const pi = 3.14;
console.log(pi);
// pi = 3.14159; // Error: cannot reassign a const variable.
// const pi = 3.14159; // Error: cannot redeclare a const variable.
// `const` variables must be initialized when declared.
