//Template literals in JavaScript are a way to create strings that are more flexible and readable. They allow you to embed variables and expressions directly inside a string.
//Instead of using quotes ' ' or " ", template literals use backticks:` `
let name = "Vaibhav";
let message = `Hello ${name}`;

console.log(message);

//string contatnaiton

let age = 20;

let text = `My name is ${name} and I am ${age} years old.`;
console.log(text);

let obj ={
    item:"pen",
    price:10
}

// string interpolation
let output=`the cost of ${obj.item} is ${obj.price} rupees`
console.log(output)