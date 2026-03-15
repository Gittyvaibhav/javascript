// Primitive data types in JavaScript and non-primitive data types in JavaScript.

// Primitive data types in JavaScript are: string, number, boolean,
// null, undefined, symbol, and bigint.
// Non-primitive data types in JavaScript are: object, array, and function.

// Primitive data types are immutable, which means their values cannot
// be changed after they are created. When we assign a new value,
// the variable now stores that new value.
let name = "Vaibhav";
console.log(name);
name = "John";
console.log(name);

// Non-primitive data types are mutable, which means their values
// can be changed after they are created.
let person = {
    name: "Vaibhav",
    age: 25
};
console.log(person);
person.name = "John";
console.log(person);

// An object is a collection of key-value pairs.
// The keys are strings, and the values can be of any data type.
// We can access object values using dot notation or bracket notation.
const student = {
    name: "Vaibhav",
    age: 25,
    cgpi: 7.27
};
console.log(student);

// Object keys can be updated, and new keys can also be added.
// But the object itself cannot be reassigned to a new value here.
student.name = "John";
student.cgpi = "A";
console.log(student);
