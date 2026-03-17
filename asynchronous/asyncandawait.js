// async always retuns a promise
async function f() {
    console.log
}
// await waits for the promise to resolve and then returns the result
// await is used only inside async functions
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise; // wait until the promise resolves (*)
    console.log(result); // "done!"
}


function api() {
    return new Promise((resolve, reject) => {
        console.log("calling api...");
        setTimeout(() => resolve("done!"), 1000)

    });
}

async function getWeatherData() {
    await api();
}