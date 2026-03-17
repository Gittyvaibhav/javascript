//synchronous programming is a programming paradigm where tasks are executed sequentially, meaning that each task must complete before the next one begins. In this model, the program waits for each operation to finish before moving on to the next one, which can lead to blocking behavior if a task takes a long time to complete. This can result in a less responsive user interface or slower performance when dealing with time-consuming operations.


// asynchronous programming is a programming paradigm that allows for non-blocking operations, enabling the program to continue executing other tasks while waiting for certain operations to complete. This is particularly useful in scenarios such as handling user input, making network requests, or performing time-consuming computations without freezing the user interface.

// example of asynchronous programming using setTimeout
console.log("Start");

setTimeout(() => {
    console.log("This is an asynchronous operation");
}, 2000);

console.log("End");// In this example, "Start" and "End" will be logged immediately, while the message inside the setTimeout callback will be logged after a 2-second delay, demonstrating that the program continues to execute without waiting for the asynchronous operation to complete.


// callback functions are a fundamental concept in asynchronous programming. A callback function is a function that is passed as an argument to another function and is executed after a certain event or operation has completed. This allows for non-blocking behavior, as the program can continue executing other tasks while waiting for the callback to be invoked.
// example of a callback function
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    // simulating a time-consuming operation
   
        sumCallback(a,b);
calculator(1,2,sum);
}// In this example, the calculator function takes two numbers and a callback function (sumCallback). The sum function is passed as the callback, and it will be executed after the calculator function simulates a time-consuming operation. This allows the program to continue executing other tasks while waiting for the sum to be calculated.

//callback hell is a term used to describe a situation where multiple nested callback functions are used, leading to code that is difficult to read and maintain. This often occurs when dealing with asynchronous operations that depend on the results of previous operations, resulting in a pyramid-like structure of callbacks. To avoid callback hell, developers can use techniques such as Promises or async/await to manage asynchronous code more effectively and improve readability.

//examle of callback hell
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched from server";
        callback(data);
    }, 2000);
}

function processData(data, callback) {
    setTimeout(() => {
        const processedData = data.toUpperCase();
        callback(processedData);
    }, 2000);
}
// we make promises to avoid callback hell
