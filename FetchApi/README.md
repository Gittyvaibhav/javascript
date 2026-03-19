# Fetch API Study Notes

This project uses the Fetch API to get a random cat fact from:

```txt
https://catfact.ninja/fact
```

The goal of this README is to help you study the topic step by step with simple explanations and small code examples.

## 1. What Is an API?

API stands for **Application Programming Interface**.

An API allows one software application to communicate with another and exchange data.

### Real idea

- A weather app can ask a weather API for temperature data.
- A shopping app can ask a payment API to process payments.
- This project asks a cat facts API for a random fact.

### Example

```js
fetch("https://catfact.ninja/fact");
```

In the example above, JavaScript is requesting data from an API endpoint.

## 2. What Is the Fetch API?

The **Fetch API** is a built-in JavaScript feature used to make **HTTP requests** from the browser.

We use it when we want to:

- get data from a server
- send data to a server
- update existing data
- delete data

### Basic syntax

```js
fetch(url, options);
```

### Example

```js
fetch("https://catfact.ninja/fact");
```

`fetch()` returns a **Promise**. That Promise later gives us a **Response object**.

## 3. Why Do We Use Fetch API?

Fetch API is popular because it:

- is modern and cleaner than `XMLHttpRequest`
- works with Promises
- supports `async` and `await`
- is commonly used in real JavaScript projects

### Example

```js
fetch("https://catfact.ninja/fact")
  .then((response) => console.log(response));
```

This sends a request and prints the response object when it arrives.

## 4. What Is a Resource?

A **resource** is anything we want to request from a server.

Resources can be:

- JSON data
- images
- files
- HTML pages

### Example

```js
fetch("https://catfact.ninja/fact");
```

Here, the resource is a JSON response containing a cat fact.

## 5. What Is an HTTP Request?

HTTP stands for **HyperText Transfer Protocol**.

An **HTTP request** is a message sent from the browser to a server.

### Common request methods

- `GET` -> get data
- `POST` -> send new data
- `PUT` -> update all of existing data
- `PATCH` -> update part of existing data
- `DELETE` -> remove data

This project uses a **GET** request because we only want to receive data.

### Example GET request

```js
fetch("https://catfact.ninja/fact", {
  method: "GET",
});
```

## 6. What Is an HTTP Response?

After the server receives the request, it sends back a **response**.

A response usually contains:

- **status code**
- **headers**
- **body**

### Common status codes

- `200` -> success
- `400` -> bad request / client-side error
- `404` -> page or endpoint not found
- `500` -> server-side error

### Example

```js
const response = await fetch("https://catfact.ninja/fact");
console.log(response.status);
```

If the request is successful, the status is usually `200`.

## 7. What Is JSON?

JSON stands for **JavaScript Object Notation**.

It is a common format used to send and receive data between client and server.

JSON looks like a JavaScript object, but it is actually plain text.

### Example JSON

```json
{
  "fact": "Cats sleep for many hours each day.",
  "length": 38
}
```

### JavaScript example

```js
const user = {
  name: "Aman",
  age: 21,
};
```

A JavaScript object can be used directly in code, but JSON is usually sent as text over the network.

## 8. What Does `fetch()` Do?

The `fetch()` method sends a request for a resource.

### Example

```js
const responsePromise = fetch("https://catfact.ninja/fact");
console.log(responsePromise);
```

At first, `fetch()` gives a Promise. After the request is completed, that Promise resolves to a Response object.

### Another example

```js
const response = await fetch("https://catfact.ninja/fact");
console.log(response);
```

## 9. What Does `response.json()` Do?

`response.json()` reads the response body and converts JSON into a usable JavaScript object.

### Important point

- `fetch()` gives a `Response` object
- `response.json()` gives the actual data
- `response.json()` is also asynchronous

### Example

```js
const response = await fetch("https://catfact.ninja/fact");
const data = await response.json();

console.log(data);
console.log(data.fact);
```

## 10. Why Do We Use `async` and `await`?

API calls take time, so JavaScript handles them asynchronously.

`async` and `await` make asynchronous code easier to read.

### Example

```js
const getFacts = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  console.log(data.fact);
};
```

### Meaning of the code

- `async` means the function works with asynchronous operations
- `await fetch(...)` waits for the server response
- `await response.json()` waits for JSON conversion

## 11. Promise and Asynchronous Behavior

A **Promise** represents the result of an asynchronous task.

A Promise can be:

- `pending`
- `fulfilled`
- `rejected`

### Promise example

```js
fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  .then((data) => console.log(data.fact))
  .catch((error) => console.log(error));
```

### Async meaning

Asynchronous code does not block the whole program while waiting for a result.

## 12. Endpoint Meaning

An **endpoint** is the URL where the API can be accessed.

### Example

```txt
https://catfact.ninja/fact
```

### In code

```js
const URL = "https://catfact.ninja/fact";
```

## 13. Flow of This Project

This project works in the following order:

1. The user clicks the button.
2. JavaScript runs `getFacts()`.
3. `fetch(URL)` sends a GET request to the API.
4. The server sends back a response.
5. `response.json()` converts JSON text into a JavaScript object.
6. The fact is taken from `data.fact`.
7. The fact is shown on the page.

### Mini flow example

```js
btn.addEventListener("click", async () => {
  const response = await fetch(URL);
  const data = await response.json();
  factPara.innerText = data.fact;
});
```

## 14. Project Code Breakdown

This section explains the code used in this project.

### 14.1 API URL

```js
const URL = "https://catfact.ninja/fact";
```

This variable stores the API endpoint.

### 14.2 Selecting HTML elements

```js
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
```

These lines select:

- the paragraph where the fact will appear
- the button that the user clicks

### 14.3 Fetch function

```js
const getFacts = async () => {
  console.log("getting data...");

  const response = await fetch(URL);
  const data = await response.json();

  factPara.innerText = data.fact;
};
```

This function:

- sends the request
- receives the response
- converts JSON into an object
- displays the fact in the paragraph

### 14.4 Event listener

```js
btn.addEventListener("click", getFacts);
```

This runs `getFacts()` whenever the button is clicked.

## 15. GET Request vs POST Request

It is helpful to compare these two common methods.

### GET request

Used to **receive data**.

```js
fetch("https://catfact.ninja/fact", {
  method: "GET",
});
```

### POST request

Used to **send new data**.

```js
fetch("https://example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Rahul",
  }),
});
```

This project only uses `GET`.

## 16. Fetch API Syntax Patterns

There are two common ways to write Fetch API code.

### Pattern 1: Using `.then()`

```js
fetch("https://catfact.ninja/fact")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.fact);
  });
```

### Pattern 2: Using `async/await`

```js
const loadData = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  console.log(data.fact);
};
```

`async/await` is usually easier for beginners to read.

## 17. Error Handling in Fetch API

In real projects, requests can fail because of:

- wrong URL
- no internet connection
- server error
- invalid response

### Example with `try...catch`

```js
const getFacts = async () => {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    console.log(data.fact);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
};
```

### Better example with status check

```js
const getFacts = async () => {
  try {
    const response = await fetch("https://catfact.ninja/fact");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    console.log(data.fact);
  } catch (error) {
    console.log(error.message);
  }
};

### Wrong example

```js
const response = fetch("https://catfact.ninja/fact");
const data = response.json();
console.log(data.fact);
```

This is wrong because `fetch()` and `response.json()` are asynchronous.

### Correct example

```js
const response = await fetch("https://catfact.ninja/fact");
const data = await response.json();
console.log(data.fact);
```

## 18. Fetch API and AJAX

AJAX stands for **Asynchronous JavaScript and XML**.

AJAX is a **concept**, not a single function.

It means sending and receiving data without reloading the page.

The Fetch API is one modern way to perform AJAX requests.

### Example

```js
btn.addEventListener("click", async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  factPara.innerText = data.fact;
});
```

The page does not reload, but new data still appears. That is AJAX behavior.

## 20. Quick Revision

### Short notes

- API helps applications communicate
- Fetch API is used to make HTTP requests
- `fetch()` returns a Promise
- the Promise gives a Response object
- `response.json()` converts JSON into a JavaScript object
- `GET` is used to receive data
- `async/await` makes async code easier to understand

### One quick example

```js
const getFacts = async () => {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  console.log(data.fact);
};
```

## 21. Project Summary

This project is a simple example of how the Fetch API works in the browser.

When the user clicks the button:

- a GET request is sent to the cat facts API
- the server sends back a JSON response
- JavaScript converts that JSON into an object
- the cat fact is displayed on the web page

### Full project example

```js
const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  factPara.innerText = data.fact;
};

btn.addEventListener("click", getFacts);
```
