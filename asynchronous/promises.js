//promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner, avoiding callback hell and making it easier to handle errors.

// A promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a resulting value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure (usually an error).

//syntax of creating a promise
const myPromise = new Promise((resolve, reject) => { })
// asynchronous operation goes here
// if the operation is successful, call resolve(value)
// if the operation fails, call reject(error)
// in general api and other asynchronous operations return promises, so we don't need to create them manually

// example of a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched from server";
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log(data); // "Data fetched from server"
    })
    .catch(error => {
        console.error(error);
    });


// .then() & .catch()
// The .then() method is used to handle the fulfillment of a promise, allowing you to specify a callback function that will be executed when the promise is resolved successfully. The .catch() method is used to handle any errors that may occur during the execution of the promise, allowing you to specify a callback function that will be executed if the promise is rejected. These methods help in managing asynchronous code more effectively and improving readability by avoiding nested callbacks.

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Promise is being executed");
        resolve("Promise resolved successfully");
    })
}

let promise=getPromise();
promise.then(()=>{
 console.log("Promise fulfilled");
})