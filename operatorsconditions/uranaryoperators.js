// Unary operators are operators that work with only one operand.
// In these examples, the increment operator is used to show the difference
// between postfix and prefix behavior.

// let x = 5;
// console.log(++x); // 6 (increment first, then print)

// let y = 5;
// console.log(y++); // 5 (print first, then increment)

let x = 5;

let y = x++ + ++x;

console.log(x); // 7
console.log(y); // 12

x = 5;
console.log(x++); // 5

x = 5;
console.log(++x); // 6
