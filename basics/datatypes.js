// JavaScript data types are divided into primitive and non-primitive types.
// Primitive types: string, number, boolean, null, undefined, symbol, bigint.
// Non-primitive types: object, array, function.

// Primitive values are immutable. When you assign a new value to a variable,
// it starts holding the new value (the old value does not change).
let name = "Vaibhav";
console.log(name);
name = "John";
console.log(name);

// Non-primitive values are mutable. You can change the contents of an object
// without reassigning the variable that refers to it.
let person = {
    name: "Vaibhav",
    age: 25
};
console.log(person);
person.name = "John";
console.log(person);

// An object is a collection of key-value pairs.
// Keys are strings, and values can be any valid JavaScript type.
const student = {
    name: "Vaibhav",
    age: 25,
    cgpi: 7.27
};
console.log(student);

// Object properties can be updated and new properties can be added.
// However, a `const` object variable cannot be reassigned to a different object.
student.name = "John";
student.cgpi = "A";
console.log(student);
