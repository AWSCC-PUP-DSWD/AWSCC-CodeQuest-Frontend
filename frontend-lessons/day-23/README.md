**<h1 align="center">DAY 23: Event Listeners</h1>**

Event listeners are an essential concept in JavaScript for handling user interactions and responding to events that occur in a web page. They allow you to "listen" for specific events on HTML elements, such as clicks, mouse movements, keyboard input, and more, and execute code in response to those events.

Here's a breakdown of how event listeners work:

1. **Select an HTML Element:** First, you select an HTML element you want to attach an event listener to. You can select elements using methods like `getElementById`, `querySelector`, or `getElementsByClassName`.

2. **Attach an Event Listener:** Once you've selected the element, you use the `addEventListener` method to attach an event listener to it. This method takes two main arguments:
   - The event type: This is a string that specifies the type of event you want to listen for, like "click," "mouseenter," "keydown," etc.
   - The callback function: This is a JavaScript function that gets executed when the specified event occurs.

   ```javascript
   // Example of attaching a click event listener
   element.addEventListener('click', function (event) {
       // Your code to handle the click event goes here
   });
   ```

   Alternatively, you can use an arrow function for the callback:

   ```javascript
   element.addEventListener('click', event => {
       // Your code to handle the click event goes here
   });
   ```

3. **Event Handling:** When the specified event occurs on the selected element, the callback function you provided is executed. The `event` object is automatically passed to the callback function, allowing you to access information about the event, like the target element, event type, or any related data.

4. **Action in Response to the Event:** Inside the callback function, you can write code to perform specific actions in response to the event. For example, you might change the content of an element, update styles, perform calculations, or trigger other functions.

Here are a few common HTML events that you can listen for and handle using event listeners:

- `click`: Triggered when an element is clicked.
- `dblclick`: Triggered when an element is double-clicked.
- `mouseenter`: Triggered when the mouse pointer enters the element.
- `mouseleave`: Triggered when the mouse pointer leaves the element.
- `mousemove`: Triggered when the mouse pointer moves within the element.
- `keydown`, `keyup`, `keypress`: Triggered when keyboard keys are pressed, released, or a key is pressed, respectively.
- `input`: Triggered when the value of an input field changes.
- `change`: Triggered when an input field loses focus, and its value has changed.
- `blur`: Triggered when an element loses focus.
- `load`: Triggered when a page or an element has finished loading.

For example, here's how you might use an event listener to respond to a button click:

```javascript
const button = document.querySelector('button');

button.addEventListener('click', function (event) {
    // Code to handle the button click
    alert('Button clicked!');
});
```

***With this event listener, the alert will be shown when the button is clicked.***

In summary, event listeners in JavaScript are used to respond to user interactions and events on HTML elements. They allow you to specify the event type you want to listen for and provide a callback function to execute when that event occurs. Event listeners are crucial for creating interactive and dynamic web applications.

### **Click** 

The click event listener is one of the most commonly used event listeners in JavaScript. It allows you to respond to a user clicking on an HTML element, such as a button, link, or any other clickable element on a web page.

*Here's a step-by-step explanation of how to use a click event listener in JavaScript:*

1. **Select the HTML Element:** First, you need to select the HTML element to which you want to attach the click event listener. You can do this using methods like `getElementById`, `querySelector`, or any other method that lets you target the element. For example, if you have a button element in your HTML:

   ```html
   <button id="myButton">Click Me</button>
   ```

   You can select it using its `id` like this:

   ```javascript
   const button = document.getElementById('myButton');
   ```

2. **Attach the Click Event Listener:** Once you've selected the element, you can use the `addEventListener` method to attach the click event listener. You specify the event type, which in this case is "click," and provide a callback function that will be executed when the click event occurs.

   ```javascript
   button.addEventListener('click', function(event) {
       // Your code to handle the click event goes here
   });
   ```

   Alternatively, you can use an arrow function for the callback:

   ```javascript
   button.addEventListener('click', event => {
       // Your code to handle the click event goes here
   });
   ```

3. **Event Handling:** When the button is clicked, the callback function you provided in the `addEventListener` method is executed. The `event` object is automatically passed to the callback function, allowing you to access information about the event.

   - You can use `event.target` to access the element that was clicked, in this case, the button.
   - You can perform actions or execute code in response to the click event.

*Here's an example of a click event listener in action:*

```html
<!DOCTYPE html>
<html>
<head>
    <title>Click Event Listener</title>
</head>
<body>
    <button id="myButton">Click Me</button>

    <script>
        const button = document.getElementById('myButton');

        button.addEventListener('click', function(event) {
            // This code will run when the button is clicked
            alert('Button clicked!');
        });
    </script>
</body>
</html>
```

>In this example, when the "Click Me" button is clicked, an alert message with the text "Button clicked!" will appear. The click event listener is a fundamental building block for creating interactive web applications, allowing you to respond to user interactions with your webpage.

## **Event Listeners - Day 23: Assignment**

### **Submission Guidelines:**
1. Read the assignment instructions in the index.js file and organize your code and files neatly in the [javascript-tasks/day-23](../javascript-tasks/day-23/) folder.
2. Make sure to save it into your own repository. **ALL** tasks will be evaluated after the submission deadline in order to claim your certificate.
