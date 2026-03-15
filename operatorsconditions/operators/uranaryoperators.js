// Unary operators work with a single operand.
// The increment operator (`++`) can be used in two ways:
// - Prefix: `++x` increments first, then returns the new value.
// - Postfix: `x++` returns the current value, then increments.

// Example: prefix increments immediately.
// let x = 5;
// console.log(++x); // 6 (increment first, then print)

// Example: postfix increments after returning the value.
// let y = 5;
// console.log(y++); // 5 (print first, then increment)

let x = 5;

let y = x++ + ++x; // combines postfix and prefix increments

console.log(x); // 7
console.log(y); // 12

x = 5;
console.log(x++); // 5 (postfix: value used first)

x = 5;
console.log(++x); // 6 (prefix: increment first)
