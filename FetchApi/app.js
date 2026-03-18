// api endpoint
const URL = "https://catfact.ninja/fact";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");
// this is a GET request
const getFacts = async () => {
    console.log("getting data...");

    // wait for fetch and store result in 'response'
    let response = await fetch(URL);
    console.log(response);

    // response.json() is async → must use await
    let data = await response.json();
    console.log(data.fact);
    factPara.innerText=data.fact;

    // response.json is also asynchronous 
}
btn.addEventListener("click", getFacts);




//GET request network request which brings data from the api endpoint
