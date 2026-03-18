# Fetch API Notes

## 1. What Is an API?

API stands for **Application Programming Interface**.

In simple words, an API allows one software application to talk to another and exchange data.

Example:
- A weather website can get weather data from a weather API.
- This project gets cat facts from the API endpoint: `https://catfact.ninja/fact`

An API usually gives data through a **URL endpoint**.

## 2. What Is the Fetch API?

The **Fetch API** is a modern JavaScript feature used to make **HTTP requests** from the browser.

We use it when we want to:
- get data from a server
- send data to a server
- update data
- delete data

It is more modern and cleaner than `XMLHttpRequest`.

## 3. Why Do We Use Fetch API?

We use Fetch API because it:
- works with **Promises**
- makes asynchronous code easier to read
- is commonly used in modern JavaScript projects
- helps us interact with APIs and servers

## 4. What Does `fetch()` Do?

The `fetch()` method is used to request a resource.

Syntax:

```js
fetch(url, options)
```

Basic example:

```js
fetch("https://catfact.ninja/fact");
```

`fetch()` returns a **Promise**.

That Promise resolves to a **Response object**.

## 5. What Is a Resource?

A **resource** means the data or content we want to access.

Examples:
- a JSON API response
- an image
- a file
- a web page

## 6. What Is an HTTP Request?

An HTTP request is a message sent from the browser to the server.

Common request methods:
- `GET` -> get data
- `POST` -> send new data
- `PUT` -> update existing data
- `DELETE` -> remove data

In this project, we use a **GET request** because we only want to receive a cat fact.

## 7. What Is an HTTP Response?

The server sends back a **response** after receiving the request.

The response contains things like:
- status code
- headers
- response body

Example:
- request sent to: `https://catfact.ninja/fact`
- response received from server: a fact in JSON format

## 8. What Is JSON?

JSON stands for **JavaScript Object Notation**.

It is a common format used to send and receive data between client and server.

JSON looks similar to a JavaScript object, but it is actually plain text data.

Example JSON:

```json
{
  "fact": "Cats sleep for many hours each day.",
  "length": 38
}
```

After receiving JSON, JavaScript converts it into a usable object.

## 9. What Does `response.json()` Do?

`response.json()` reads the response body and converts JSON data into a JavaScript object.

Important:
- `fetch()` gives a `Response` object
- `response.json()` gives the actual data
- `response.json()` is also asynchronous

Example:

```js
let response = await fetch(URL);
let data = await response.json();
```

## 10. Why Use `async` and `await`?

API calls take time, so JavaScript handles them asynchronously.

`async` and `await` help us write asynchronous code in a cleaner way.

Example:

```js
const getFacts = async () => {
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data.fact);
};
```

Here:
- `await fetch(URL)` waits for the server response
- `await response.json()` waits for JSON conversion

## 11. Flow of This Project

This project works in the following order:

1. User clicks the button.
2. JavaScript calls the `getFacts()` function.
3. `fetch(URL)` sends a GET request to the API.
4. The server sends back a response.
5. `response.json()` converts the JSON into a JavaScript object.
6. The cat fact is taken from `data.fact`.
7. The fact is shown on the page.

## 12. Code Breakdown

### API URL

```js
const URL = "https://catfact.ninja/fact";
```

This is the endpoint from which data is requested.

### Selecting HTML Elements

```js
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");
```

These lines select:
- the paragraph where the fact will be shown
- the button the user clicks

### Fetch Function

```js
const getFacts = async () => {
  console.log("getting data...");

  let response = await fetch(URL);
  console.log(response);

  let data = await response.json();
  console.log(data.fact);
  factPara.innerText = data.fact;
};
```

What happens here:
- request is sent to the API
- response is received
- JSON is converted into a JavaScript object
- the fact is displayed in the paragraph

### Event Listener

```js
btn.addEventListener("click", getFacts);
```

This runs `getFacts()` when the button is clicked.

## 13. Important Terms

### Promise

A Promise is an object that represents the result of an asynchronous operation.

It can be:
- pending
- fulfilled
- rejected

### Asynchronous

Asynchronous means the program does not stop and wait completely. It can continue doing other work while waiting for a task like an API call.

### Endpoint

An endpoint is a URL where the API can be accessed.

Example:

```txt
https://catfact.ninja/fact
```

## 14. Fetch API Syntax Patterns

### Simple GET Request

```js
fetch("https://example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### GET Request with `async/await`

```js
const loadData = async () => {
  const response = await fetch("https://example.com/data");
  const data = await response.json();
  console.log(data);
};
```

## 15. Common Errors Beginners Make

- forgetting to use `await` with `fetch()`
- forgetting to use `await` with `response.json()`
- trying to use data before it is available
- writing the wrong API URL
- expecting JSON without converting it using `response.json()`
- attaching event listeners incorrectly

## 16. Difference Between Fetch API and AJAX

AJAX means **Asynchronous JavaScript and XML**.

AJAX is a concept used to send and receive data without reloading the page.

`fetch()` is one modern way to perform AJAX requests.

So:
- AJAX = concept
- Fetch API = modern JavaScript tool used for AJAX

## 17. Quick Revision

- API helps applications communicate.
- Fetch API is used to make HTTP requests.
- `fetch()` returns a Promise.
- The first result is a `Response` object.
- `response.json()` converts JSON into a JavaScript object.
- `GET` request is used to receive data.
- `async/await` makes asynchronous code easier to understand.

## 18. Project Summary

This project uses the Fetch API to request a cat fact from an API endpoint. When the user clicks the button, JavaScript sends a GET request, receives the response, converts the JSON data into a JavaScript object, and displays the fact on the web page.
