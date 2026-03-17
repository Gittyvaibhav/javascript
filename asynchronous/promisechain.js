function asyncFun1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise resolved successfully");
            resolve();
        }, 2000);
    });
}

function asyncFun2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise resolved successfully");
            resolve();
        }, 6000);
    });
}

//promise chaining is a technique in JavaScript where multiple promises are linked together in a sequence, allowing for the execution of asynchronous operations in a specific order. Each promise in the chain is executed after the previous one has been resolved, and the result of one promise can be passed to the next promise in the chain. This helps to avoid callback hell and makes it easier to manage complex asynchronous workflows.
console.log("fetching data1")
let promise1=asyncFun1();
promise1.then((res)=>{
    console.log(res);
    console.log("fetching data2")
    let promise2=asyncFun2();
    promise2.then((res)=>{
        console.log(res);
    })

})

