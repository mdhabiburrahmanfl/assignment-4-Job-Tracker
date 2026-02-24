1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer:- getElementById is used to select a single element . Id is unique in a webpage, it always returns only one element.getElementsByClassName is used to select elements that have the same class name. Many elements can share the same class.
   querySelector is used to select the first element that matches a CSS selector. It is more flexible because we can select elements by id, class, tag name, or other CSS selectors. querySelectorAll is similar to querySelector, but the difference is that it selects all matching elements and returns them as a list.

2. How do you create and insert a new element into the DOM?
   Answer:- First, we create a new element using document.createElement(). After creating the element, we can add text or content inside it. Then we insert the element into the webpage using methods like appendChild().

3. What is Event Bubbling? And how does it work?
   Answer:-Event bubbling is a concept in JavaScript where an event starts from the target element and then moves up to its parent elements in the DOM.
   For example, if you click a button inside a div, the event will first happen on the button, then on the div, then on the body.
   So the event moves from child → parent → document.
   This is called event bubbling.
4. What is Event Delegation in JavaScript? Why is it useful?
   Answer:- Event delegation means adding an event to the parent element instead of adding events to many child elements. When we click a child element, the event goes to the parent because of event bubbling. Then the parent can handle the event. This is useful because it makes the code shorter and easier, and it also works for new elements added later.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer:- preventDefault() stops the browser’s normal action. Such as: When a form is submitted, the page reloads. preventDefault() stops that reload. stopPropagation() stops the event from going to the parent element.Normally an event goes child → parent. stopPropagation() stops this.
