# DOM Notes for Study

## 1. Three Core Parts of the Web

The web mainly uses three technologies:

- **HTML** -> structure of the webpage
- **CSS** -> styling and design
- **JavaScript** -> logic, behavior, and interactivity

An easy way to remember:

- HTML = skeleton
- CSS = look
- JavaScript = actions and logic

Example:

```html
<h1>Hello</h1>
<button>Click Me</button>
```

```css
h1 {
  color: blue;
}
```

```js
document.querySelector("button").onclick = function () {
  alert("Button clicked");
};
```

## 2. Window Object

The **window object** represents the browser window or tab.

Important points:

- It is created automatically by the browser
- It is a browser object, not a core JavaScript object
- It is the **global object** in the browser
- Many properties and methods are available inside it

Examples:

```js
window.alert("Hello");
window.console.log("Hi");
window.prompt("Enter your name");
```

In most cases, we do not write `window` explicitly:

```js
alert("Hello");
console.log("Hi");
prompt("Enter your name");
```

This works because these methods are available globally through `window`.

## 3. What Is the DOM?

**DOM** stands for **Document Object Model**.

When a browser loads an HTML page, it converts that page into objects. That object-based representation is called the DOM.

This allows JavaScript to:

- access HTML elements
- read their content
- change their content
- change their styles
- respond to user actions

Example HTML:

```html
<body>
  <h1 id="title">Welcome</h1>
  <p class="info">Learning DOM</p>
</body>
```

JavaScript can access it like this:

```js
document.getElementById("title").innerText = "Hello DOM";
```

## 4. Document Object

The loaded HTML page is represented in JavaScript by the **document object**.

- `document` is part of the DOM
- `document` is available inside `window`
- `window.document` and `document` refer to the same object

Examples:

```js
console.log(document);
console.dir(document);
```

## 5. `console.log()` vs `console.dir()`

Both are used for debugging, but they are slightly different.

- `console.log()` -> general output
- `console.dir()` -> shows an object's properties in more detail

Example:

```js
console.log(document);
console.dir(document);
```

`console.dir()` is especially helpful when inspecting DOM elements and special objects.

## 6. DOM Manipulation

DOM manipulation means using JavaScript to access and change HTML elements.

With DOM manipulation, we can:

- change text
- change HTML
- change attributes
- change styles
- add or remove elements

Example:

```js
document.querySelector("h1").innerText = "Changed Heading";
```

## 7. Selecting Elements

To manipulate an element, we first need to select it.

### a. Selecting by ID

Use:

```js
document.getElementById("title");
```

Example:

```html
<h1 id="title">Hello</h1>
```

```js
let heading = document.getElementById("title");
```

Important:

- In CSS, `#` represents an id
- In `getElementById()`, we only write the id name, not `#title`

Correct:

```js
document.getElementById("title");
```

Wrong:

```js
document.getElementById("#title");
```

### b. Selecting by Class

Use:

```js
document.getElementsByClassName("myClass");
```

This is useful when multiple elements have the same class.

Example:

```html
<p class="myClass">First</p>
<p class="myClass">Second</p>
```

### c. Selecting by Tag Name

Use:

```js
document.getElementsByTagName("p");
```

This selects all `<p>` elements.

### d. `querySelector()`

Use:

```js
document.querySelector("p");
```

This returns the **first matching element**.

It can select:

- tag -> `"p"`
- id -> `"#title"`
- class -> `".myClass"`

Examples:

```js
document.querySelector("p");
document.querySelector("#title");
document.querySelector(".myClass");
```

### e. `querySelectorAll()`

Use:

```js
document.querySelectorAll("p");
```

This returns **all matching elements**.

Examples:

```js
let paragraphs = document.querySelectorAll("p");
let items = document.querySelectorAll(".item");
```

Difference:

- `querySelector()` -> first matching element
- `querySelectorAll()` -> all matching elements

## 8. Important Element Properties

### a. `tagName`

Returns the tag name of the selected element.

```js
let el = document.querySelector("h1");
console.log(el.tagName);
```

Output:

```js
H1
```

### b. `innerText`

Returns the visible text inside an element and its children.

```html
<p>Hello <span>World</span></p>
```

```js
document.querySelector("p").innerText;
```

Output:

```js
"Hello World"
```

### c. `innerHTML`

Returns the HTML content inside an element.

```js
document.querySelector("p").innerHTML;
```

If the HTML is:

```html
<p>Hello <span>World</span></p>
```

Then output will be:

```js
"Hello <span>World</span>"
```

It can also be used to replace HTML:

```js
document.querySelector("p").innerHTML = "<b>Updated</b>";
```

### d. `textContent`

Returns the full text content of an element, including text that may not be visibly displayed.

```js
document.querySelector("p").textContent;
```

Simple difference:

- `innerText` -> visible text
- `textContent` -> all text content
- `innerHTML` -> HTML markup inside the element

## 9. DOM Tree and Nodes

The DOM is structured like a tree.

Everything in the DOM is a **node**.

Main node types:

- **Element node** -> HTML tags like `<h1>`, `<p>`, `<div>`
- **Text node** -> text inside elements
- **Comment node** -> HTML comments

Example:

```html
<div>
  Hello
  <p>Text</p>
</div>
```

Here:

- `<div>` is an element node
- `Hello` is a text node
- `<p>` is an element node

### Child Access

Useful properties:

```js
element.firstChild;
element.lastChild;
```

But be careful:

- `firstChild` may return a text node because of spaces or line breaks
- `firstElementChild` is often more useful when you only want HTML elements

Examples:

```js
document.body.firstChild;
document.body.lastChild;
document.body.firstElementChild;
document.body.lastElementChild;
```

## 10. Quick Summary

- `window` is the global browser object
- `document` represents the webpage
- DOM is the object model of the HTML page
- JavaScript uses the DOM to access and change webpage elements
- Elements can be selected by id, class, tag, or CSS selectors
- Useful properties include `tagName`, `innerText`, `innerHTML`, and `textContent`
- The DOM contains nodes such as element nodes, text nodes, and comment nodes

## 11. Practice Commands

Try these in the browser console:

```js
document.getElementById("title");
document.querySelector("h1");
document.querySelectorAll("p");
document.body.innerText;
document.body.innerHTML;
document.body.firstElementChild;
```

## 12. Interview-Style Revision Questions

1. What is the DOM?
2. What is the difference between `window` and `document`?
3. What is the difference between `innerText`, `textContent`, and `innerHTML`?
4. What is the difference between `querySelector()` and `querySelectorAll()`?
5. Why can `firstChild` return a text node?
6. How do you select an element using id, class, and tag name?

## 13. One-Line Revision

The DOM is the browser's object representation of an HTML page, and JavaScript uses it to access, inspect, and modify webpage elements.
