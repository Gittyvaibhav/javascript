# Currency Converter Mini Project

A beginner-friendly JavaScript mini project that converts one currency into another using a live exchange-rate API.

This project is useful for practicing how JavaScript works with the DOM, user input, events, and asynchronous data from an API.

## What You Will Learn

- How to select HTML elements using `querySelector()` and `querySelectorAll()`
- How to listen for user actions with `addEventListener()`
- How to update text and images on the page dynamically
- How to use `fetch()` to get data from an API
- How `async` and `await` help us work with asynchronous code
- How to loop through data and create `<option>` elements with JavaScript

## Project Features

- Enter an amount to convert
- Choose a base currency
- Choose a target currency
- See country flags change when currency changes
- Fetch the latest exchange rate from an API
- Display the converted amount on the screen

## Technologies Used

- HTML
- CSS
- JavaScript
- Exchange Rate API:
  `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`
- Flags API:
  `https://flagsapi.com`

## Folder Structure

```text
01CurrencyConverter/
|-- index.html
|-- style.css
|-- app.js
|-- codes.js
|-- README.md
```

## File Explanation

### `index.html`

Contains the structure of the app:

- Input field for amount
- Two dropdowns for currency selection
- Exchange result message
- Button to trigger conversion

### `style.css`

Handles the design of the app:

- Layout and spacing
- Input, dropdown, and button styling
- Card-style container
- Colors and hover effects

### `codes.js`

Stores the `countryList` object.

This object maps currency codes like `USD`, `INR`, and `EUR` to country codes like `US`, `IN`, and `FR`. These country codes are used to show the correct flag image.

### `app.js`

Contains the main JavaScript logic:

- Fills both dropdowns with currency options
- Sets default currencies to `USD` and `INR`
- Changes flags when a currency is changed
- Fetches exchange-rate data from the API
- Calculates the final converted amount
- Shows the result on the page

## How It Works

1. The app loads and reads all currency codes from `codes.js`.
2. JavaScript creates dropdown options dynamically.
3. The user enters an amount and selects currencies.
4. When the button is clicked, JavaScript sends a request using `fetch()`.
5. The API returns exchange-rate data in JSON format.
6. JavaScript calculates the converted amount.
7. The result is shown inside the `.msg` element.

## Concepts And JavaScript Used In This Project

This project uses several important JavaScript concepts that every beginner should understand.

### 1. DOM Selection

JavaScript first selects elements from the HTML page so it can work with them.

Examples used in this project:

- `document.querySelectorAll(".dropdown select")`
- `document.querySelector("form button")`
- `document.querySelector(".msg")`

Why it matters:

- It allows JavaScript to read inputs from the page
- It allows JavaScript to update text and images
- It connects your JavaScript file to your HTML

### 2. Working With Objects

In `codes.js`, the project stores data inside an object called `countryList`.

Example:

```js
const countryList = {
  USD: "US",
  INR: "IN",
  EUR: "FR",
};
```

Here:

- `USD`, `INR`, and `EUR` are keys
- `US`, `IN`, and `FR` are values

Why it matters:

- Objects help store related data in a simple way
- This object is used to find the correct country code for each currency
- The country code is then used to display the correct flag

### 3. Loops

The project uses a loop to go through all currency codes and add them into both dropdown menus.

Example:

```js
for (let currCode in countryList)
```

Why it matters:

- It avoids writing every currency option manually in HTML
- It makes the app dynamic
- It teaches how to work with repeated data

### 4. Creating Elements Dynamically

The app creates `<option>` elements in JavaScript instead of hardcoding them in HTML.

Example:

```js
let newOption = document.createElement("option");
newOption.innerText = currCode;
newOption.value = currCode;
select.appendChild(newOption);
```

Why it matters:

- You learn how to build HTML elements using JavaScript
- You learn how to insert elements into the page dynamically

### 5. Event Listeners

The app listens for user actions like changing a dropdown or clicking the button.

Examples:

```js
select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
});
```

```js
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
});
```

Why it matters:

- It makes the page interactive
- JavaScript can respond when the user does something
- `preventDefault()` stops the form from reloading the page

### 6. Functions

Functions are used to organize repeated logic into reusable blocks.

Example:

```js
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    element.parentElement.querySelector("img").src = newSrc;
};
```

Why it matters:

- Functions keep the code clean
- They help avoid repeating the same logic
- They make the project easier to understand and manage

### 7. Conditionals

The project uses `if` statements to handle default selections and basic input validation.

Examples:

- Setting default currency to `USD` and `INR`
- Checking if the amount is empty or less than `1`

Example:

```js
if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
}
```

Why it matters:

- It helps control program behavior
- It prevents invalid input from breaking the app

### 8. Template Literals

The project uses backticks `` ` ` `` to build strings dynamically.

Examples:

```js
const URL = `${BASE_URL}/${formCurr.value.toLowerCase()}.json`;
```

```js
msg.innerText = `${amtVal} ${formCurr.value} = ${finalAmount} ${toCurr.value}`;
```

Why it matters:

- Template literals make string building easier
- They are cleaner than using `+` again and again

### 9. String Methods

The project uses:

```js
formCurr.value.toLowerCase()
```

Why it matters:

- The API expects lowercase currency names like `usd`
- String methods help format data before using it

### 10. Fetch API

The app gets live exchange-rate data from an online API using `fetch()`.

Example:

```js
let response = await fetch(URL);
let data = await response.json();
```

Why it matters:

- `fetch()` is used to request data from servers
- It is a very important part of modern JavaScript
- It allows the project to use real-time currency data

### 11. Async/Await

API requests take time, so the project uses `async` and `await`.

Example:

```js
btn.addEventListener("click", async (evt) => {
```

Why it matters:

- `async` makes a function asynchronous
- `await` pauses the code until the response is ready
- It makes asynchronous code easier to read for beginners

### 12. Updating The UI

After the data is received and the amount is calculated, the result is shown on the page.

Example:

```js
msg.innerText = `${amtVal} ${formCurr.value} = ${finalAmount} ${toCurr.value}`;
```

Why it matters:

- This is how JavaScript changes content on a webpage
- It helps users see updated results without refreshing the page

## Beginner Notes

- `codes.js` is used like a data file
- `app.js` is where the project behavior is written
- `fetch()` works only when the browser has internet access
- The app currently sets the value to `1` if the input is empty or less than `1`

## Practice Tasks For Beginners

Try improving the project with these small tasks:

- Add input validation for text like `abc`
- Round the final amount to 2 decimal places
- Show an error message if the API request fails
- Add a swap button feature to switch currencies
- Display the current exchange rate separately
- Prevent negative numbers in the amount input

## Learning Outcome

After understanding this project, you should be able to:

- Select HTML elements with JavaScript
- Handle button clicks and dropdown changes
- Work with objects and loops
- Create HTML elements dynamically
- Use `fetch()` to get API data
- Understand the basics of `async` and `await`
- Update the webpage dynamically using JavaScript

## Conclusion

This is a strong beginner project because it combines DOM manipulation, events, API calls, functions, objects, and asynchronous JavaScript in one simple application.
