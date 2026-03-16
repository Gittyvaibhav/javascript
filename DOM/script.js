// DOM = Document Object Model
// The browser converts HTML elements into objects.
// JavaScript can use those objects to read and change the webpage.

// window is the global object created by the browser.
// document is an object inside window that represents the HTML page.
console.log(window.document);



// 1. SELECTING ELEMENTS

// We can select HTML elements using id, class, or tag names.
// getElementById("id-name") selects an element by id.
// querySelector("selector") selects the first matching element.
// It uses CSS selectors like:
// "#main-heading", ".message", "button", "ul li"

let heading = document.getElementById("main-heading");
let description = document.getElementById("description");
let message = document.querySelector(".message");
let topicList = document.getElementById("topic-list");
let childOutput = document.getElementById("child-output");
let learningLink = document.querySelector("#learning-link");
let attributeOutput = document.getElementById("attribute-output");

let changeTextBtn = document.getElementById("change-text-btn");
let changeColorBtn = document.getElementById("change-color-btn");
let addItemBtn = document.getElementById("add-item-btn");
let showChildrenBtn = document.getElementById("show-children-btn");
let attributeBtn = document.getElementById("attribute-btn");



// 2. CHANGING TEXT USING DOM

// textContent changes the text inside an element.

changeTextBtn.addEventListener("click", function () {
    heading.textContent = "DOM Text Changed Successfully";
    description.textContent = "JavaScript changed this text using textContent.";
    message.textContent = "You clicked the Change Text button.";
});



// 3. EVENTS IN JAVASCRIPT

// An event is an action that happens in the browser.
// Examples:
// 1. click
// 2. mouseover
// 3. keydown
// 4. submit
//
// addEventListener() is used to listen for an event.



// 4. CHANGING STYLE USING DOM

// We can directly change CSS styles using JavaScript.
// We can also add or remove CSS classes.

changeColorBtn.addEventListener("click", function () {
    heading.style.color = "green";
    message.classList.toggle("highlight");
});



// 5. CREATING AND ADDING NEW ELEMENTS

// createElement() creates a new HTML element.
// appendChild() adds that element to the page.

addItemBtn.addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.textContent = "New topic added using JavaScript";
    topicList.appendChild(newItem);
});



// 6. FIRST CHILD AND LAST CHILD

// firstChild and lastChild return the first and last child nodes.
// A node can be an element, text, or comment.
//
// Because spaces and line breaks also count as text nodes,
// firstChild may sometimes return a text node instead of an HTML element.
//
// firstElementChild and lastElementChild return only HTML elements.

showChildrenBtn.addEventListener("click", function () {
    let firstNode = topicList.firstChild;
    let lastNode = topicList.lastChild;
    let firstElement = topicList.firstElementChild;
    let lastElement = topicList.lastElementChild;

    childOutput.innerHTML =
        "firstChild: " + firstNode.nodeName +
        "<br>lastChild: " + lastNode.nodeName +
        "<br>firstElementChild: " + firstElement.textContent +
        "<br>lastElementChild: " + lastElement.textContent;
});



// 7. MORE EVENT EXAMPLES

// We can attach different events to the same element.

heading.addEventListener("mouseover", function () {
    heading.style.backgroundColor = "#dbeafe";
});

heading.addEventListener("mouseout", function () {
    heading.style.backgroundColor = "transparent";
});



// 8. GETATTRIBUTE() AND SETATTRIBUTE()

// HTML elements have attributes like id, class, href, src, and title.
// getAttribute("name") reads an attribute value.
// setAttribute("name", "value") adds or changes an attribute value.

attributeBtn.addEventListener("click", function () {
    let oldHref = learningLink.getAttribute("href");

    learningLink.setAttribute("href", "https://www.w3schools.com/js/js_htmldom.asp");
    learningLink.setAttribute("title", "This link was changed using setAttribute()");

    let newHref = learningLink.getAttribute("href");

    attributeOutput.innerHTML =
        "Old href: " + oldHref +
        "<br>New href: " + newHref +
        "<br>Title attribute added using setAttribute().";
});



// 9. IMPORTANT POINTS

// 1. document lets JavaScript access HTML.
// 2. getElementById() selects an element by id.
// 3. querySelector() selects the first matching element.
// 4. textContent changes text inside an element.
// 5. style changes inline CSS from JavaScript.
// 6. addEventListener() is used to respond to events like click and mouseover.
// 7. createElement() and appendChild() help add new elements to the page.
// 8. firstChild and lastChild may include text nodes.
// 9. firstElementChild and lastElementChild return only HTML elements.
// 10. getAttribute() reads an attribute value.
// 11. setAttribute() adds or changes an attribute value.
