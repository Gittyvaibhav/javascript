//primitive data types in JavaScript and non primitive data types in JavaScript

// primitive data types in JavaScript are: string, number, boolean, null, undefined, symbol, and bigint.
// non primitive data types in JavaScript are: object, array, and function.





// primitive data types are immutable, which means that their values cannot be changed after they are created. When we assign a new value to a primitive variable, it creates a new variable in memory and assigns the new value to it.
let name = "Vaibhav";
console.log(name)
name = "John";
console.log(name)



// non primitive data types are mutable, which means that their values can be changed after they are created. When we assign a new value to a non primitive variable, it does not create a new variable in memory, but instead changes the value of the existing variable.
let person = {
    name: "Vaibhav",    
    age: 25
}
console.log(person)
person.name = "John";
console.log(person)


//Object is a collection of key-value pairs, where the keys are strings and the values can be of any data type. We can access the values of an object using dot notation or bracket notation.
const student = {
    name: "Vaibhav",
    age: 25,
    cgpi: 7.27
};
console.log(student);