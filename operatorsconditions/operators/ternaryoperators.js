// Ternary operator: a compact way to write a simple if-else statement.
// It uses three parts (operands):
//   condition ? valueIfTrue : valueIfFalse
// The expression evaluates to the second part if the condition is true,
// otherwise it evaluates to the third part.

let age = 18;

// If age is 18 or older, result becomes "Adult"; otherwise it becomes "Minor".
let result = age >= 18 ? "Adult" : "Minor";

console.log(result);