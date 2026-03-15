// A `var` variable can be reassigned and redeclared.
// A global variable can be declared with `var`, and it can be available
// throughout the program. However, `let` and `const` are generally preferred.
var name = "Vaibhav";
console.log(name);
var name = "John";
console.log(name);

console.log("\n");

// A `let` variable can be reassigned, but it cannot be redeclared.
// It is block-scoped, so it is available only inside the block
// where it is declared.
let age = 25;
console.log(age);
age = 30;
console.log(age);
// let age = 35; // This gives an error because `let` cannot be redeclared.

console.log("\n");

// A `const` variable cannot be reassigned or redeclared.
// It is also block-scoped and is available only inside its block.
const pi = 3.14;
console.log(pi);
// pi = 3.14159; // This gives an error because `const` cannot be reassigned.
// const pi = 3.14159; // This also gives an error because `const` cannot be redeclared.
// `const` variables must be initialized at the time of declaration.
