// forEach() METHOD IN JAVASCRIPT
//
// Methods are also functions, but they are connected to a specific data type.
// forEach() is an array method.
// It is used to run a function once for each element of an array.
//
// Important:
// forEach() does not create a new array.
// It is mainly used when we want to perform an action like printing,
// calculating, or updating something for every array element.



// 1. BASIC EXAMPLE


let arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function (val) {
    console.log(val);
});

// Output:
// 1
// 2
// 3
// 4
// 5
// 6



// 2. WHAT IS A CALLBACK FUNCTION?

// A callback function is a function that is passed as an argument
// to another function.
//
// In forEach(), we pass a callback function.
// That callback runs once for every array element.

let fruits = ["apple", "banana", "mango"];

fruits.forEach(function (fruit) {
    console.log(fruit);
});



// 3. USING ARROW FUNCTION WITH forEach()

// We can also use an arrow function instead of a normal function.

let numbers = [10, 20, 30];

numbers.forEach((num) => {
    console.log(num);
});



// 4. PARAMETERS OF forEach()

// The callback function in forEach() can take up to 3 parameters:
// 1. value   -> current element
// 2. index   -> position of current element
// 3. array   -> complete original array

let colors = ["red", "green", "blue"];

colors.forEach(function (value, index, array) {
    console.log("Value:", value);
    console.log("Index:", index);
    console.log("Array:", array);
});



// 5. EXAMPLE: PRINT SQUARE OF EACH NUMBER


let nums = [2, 3, 4, 5];

nums.forEach(function (num) {
    console.log(num * num);
});

// Output:
// 4
// 9
// 16
// 25



// 6. EXAMPLE WITH OBJECTS

// forEach() is very useful when an array contains objects.

let students = [
    { name: "Vaibhav", marks: 85 },
    { name: "Aman", marks: 90 },
    { name: "Riya", marks: 78 }
];

students.forEach(function (student) {
    console.log(student.name + " scored " + student.marks);
});



// 7. IMPORTANT POINTS

// 1. forEach() works on arrays.
// 2. It runs the callback once for each element.
// 3. It is mainly used for printing or performing actions.
// 4. It does not return a new array like map().
// 5. Common callback parameters are value, index, and array.


// 8. HIGHER ORDER FUNCTION

// A higher order function is a function that:
// 1. takes another function as an argument, or
// 2. returns a function
//
// forEach() is a higher order function because it takes
// a callback function as an argument.

let values = [11, 22, 33];

values.forEach(function (value) {
    console.log("Current value is:", value);
});

// Here:
// forEach() is the higher order function
// function (value) { ... } is the callback function


// 9. SIMPLE EXAMPLE OF HIGHER ORDER FUNCTION

function greet(name) {
    console.log("Hello, " + name);
}

function processUserInput(callback) {
    let userName = "Vaibhav";
    callback(userName);
}

processUserInput(greet);

// In this example:
// processUserInput() is a higher order function
// greet is passed as a function argument


// 10. IMPORTANT POINTS ABOUT HIGHER ORDER FUNCTIONS

// 1. A higher order function works with another function.
// 2. forEach(), map(), filter(), and reduce() are common examples.
// 3. The passed function is called a callback function.
// 4. Higher order functions make code more reusable and clean.
