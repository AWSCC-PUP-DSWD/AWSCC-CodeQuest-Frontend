**<h1 align="center">DAY 21: Selecting and Modifying Elements</h1>**

#### **Adding Attributes:**
In JavaScript, you can add attributes to HTML elements by manipulating the element's `attributes` property or using specific methods like `setAttribute`. Here's how it's done:

1. **HTML Setup:** You have an HTML document with an element you want to add attributes to. For example:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>Adding Attributes with JavaScript</title>
   </head>
   <body>
      <a id="myLink" href="#">Click me</a>
   </body>
</html>
```

2. **JavaScript Code:** In your JavaScript code, you can add attributes to elements using the `setAttribute` method. For example, to add a `target` attribute to the anchor (`<a>`) element:

```javascript
const myLink = document.getElementById('myLink');
myLink.setAttribute('target', '_blank');
```

3. **Result:** The `setAttribute` method adds the `target` attribute with the value `"_blank"` to the `<a>` element. The element now opens the link in a new tab or window when clicked.

You can also manipulate an element's attributes directly using the `attributes` property. Here's how you could achieve the same result:

```javascript
const myLink = document.getElementById('myLink');
myLink.attributes.target = '_blank';
```

In this example, you are directly assigning the `target` attribute to the `myLink` element.

Key points to remember:

- Use `setAttribute` to add an attribute to an element. It takes two arguments: the attribute name and its value.

- The `attributes` property allows you to manipulate attributes directly, but it's usually better to use `setAttribute` for adding or changing attributes, especially for standard HTML attributes.

- When using `setAttribute`, make sure that you follow proper naming conventions and attribute values to ensure the attribute works as intended.

#### **Adding Class Using `classList`**
The `classList` property is a useful feature in JavaScript that allows you to manipulate the classes of HTML elements. You can use it to add, remove, toggle, or check for the presence of classes on an element. Here's how you can add a class to an element:

1. **HTML Setup:** You have an HTML document with an element to which you want to add a class. For example:

```html
<!DOCTYPE html>
<html>
   <head>
      <title>Adding Class with JavaScript</title>
   </head>
   <body>
      <div id="myDiv">This is a div.</div>
   </body>
</html>
```

2. **JavaScript Code:** In your JavaScript code, you can use the `classList` property to add a class to an element. For example, to add the class "highlight" to the `<div>` element:

```javascript
const myDiv = document.getElementById('myDiv');
myDiv.classList.add('highlight');
```

3. **Result:** The `classList.add` method adds the "highlight" class to the `<div>` element, which affects its appearance based on your CSS rules.

You can also check if a class already exists before adding it to prevent duplicates:

```javascript
if (!myDiv.classList.contains('highlight')) {
    myDiv.classList.add('highlight');
}
```

Key points to remember:

- The `classList` property provides methods like `add`, `remove`, and `toggle` for manipulating classes on an element.

- Using `classList` helps manage classes more cleanly and efficiently compared to manipulating the `className` property directly.

- You can use `contains` to check if a class is already present before adding it.

### **Removing Class Using `remove`**
--- 
The `classList` property in JavaScript allows you to manipulate the classes of HTML elements. You can use it to add, remove, toggle, or check for the presence of classes on an element. Here's how you can remove a class from an element:

1. **HTML Setup:** You have an HTML document with an element that has a class you want to remove. For example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Removing Class with JavaScript</title>
</head>
<body>
    <div id="myDiv" class="highlight">This is a highlighted div.</div>
</body>
</html>
```

2. **JavaScript Code:** In your JavaScript code, you can use the `classList` property to remove a class from an element. For example, to remove the "highlight" class from the `<div>` element:

```javascript
const myDiv = document.getElementById('myDiv');
myDiv.classList.remove('highlight');
```

3. **Result:** The `classList.remove` method removes the "highlight" class from the `<div>` element, which affects its appearance based on your CSS rules.

You can also check if a class exists before removing it to avoid errors:

```javascript
if (myDiv.classList.contains('highlight')) {
    myDiv.classList.remove('highlight');
}
```

>Key points to remember:
>
>- The `classList` property provides methods like `add`, `remove`, and `toggle` for manipulating classes on an element.
>
>- Using `classList` is a cleaner and more efficient way to manage classes compared to manipulating the `className` property directly.
>
>- Selecting and modifying elements.

#### Adding Text to HTML Element:
--- 
In JavaScript, you can add or change the text content of HTML elements using the `textContent` and `innerHTML` properties. Here's how it's done:

1. **HTML Setup:** You have an HTML document with an element to which you want to add text. For example:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
      <title>Adding Text with JavaScript</title>
   </head>
   <body>
      <p id="myParagraph">This is a paragraph.</p>
   </body>
   </html>
   ```

2. **JavaScript Code:** In your JavaScript code, you can set the `textContent` or `innerHTML` property of an element to add or change its text content. Here are two examples:

   - To set the text content of a `<p>` element using `textContent`:
   ```javascript
   const myParagraph = document.getElementById('myParagraph');
   myParagraph.textContent = 'This paragraph has new text content.';
   ```

   - To set the inner HTML of the `<p>` element using `innerHTML` (you can include HTML tags within the content):
   ```javascript
   const myParagraph = document.getElementById('myParagraph');
   myParagraph.innerHTML = 'This is a <strong>bold</strong> paragraph.';
   ```

3. **Result:** The `textContent` property replaces the text content of the element, while the `innerHTML` property can include HTML markup for richer content.

Key points to remember:

- `textContent` sets the plain text content of an element, and any HTML tags within the text are treated as text.

- `innerHTML` allows you to include HTML markup within the content, making it suitable for adding styled or formatted text.

- It's important to be cautious when using `innerHTML`, especially if the content includes user-generated input, as it can be a security risk (cross-site scripting).

Using the `textContent` and `innerHTML` properties in JavaScript is a common practice for dynamically updating the text content of HTML elements, making it useful for displaying dynamic information, user interactions, and more on your web page.


### **Adding Styles to HTML Elements in JavaScript**
--- 
You can use JavaScript to add or modify the inline style of HTML elements. Here's how to add specific styles to an element:

1. **HTML Setup:** You have an HTML document with an element to which you want to add styles. For example:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
      <title>Adding Styles with JavaScript</title>
   </head>
   <body>
      <p id="myParagraph">This is a paragraph.</p>
   </body>
   </html>
   ```

2. **JavaScript Code:** In your JavaScript code, you can access the `style` property of an element and set specific style properties. Here are examples for adding color, background color, and font size:

   - To set the text color of a `<p>` element using the `color` style property:
   ```javascript
   const myParagraph = document.getElementById('myParagraph');
   myParagraph.style.color = 'blue'; // You can use color names or hexadecimal values
   ```

   - To set the background color of the `<p>` element using the `backgroundColor` style property:
   ```javascript
   myParagraph.style.backgroundColor = 'yellow'; // You can use color names or hexadecimal values
   ```

   - To set the font size of the `<p>` element using the `fontSize` style property:
   ```javascript
   myParagraph.style.fontSize = '20px'; // You can specify the size in pixels, em, rem, etc.
   ```

3. **Result:** The JavaScript code modifies the inline styles of the `<p>` element, changing its text color, background color, and font size.

> Key points to remember:
>
>- Inline styles set with JavaScript take precedence over external CSS stylesheets but may be overridden by more specific inline styles.
>
>- You can use CSS property names like `color`, `backgroundColor`, and > `fontSize` to set specific styles.
>
>- Ensure that you use valid CSS values and units when setting style properties.

In summary, using JavaScript to add inline styles to HTML elements is a powerful way to dynamically change the appearance of elements on your web page, allowing for dynamic styling based on user interactions or other factors.

> These are some fundamental operations you can perform with the DOM using JavaScript. It allows you to dynamically change the content and appearance of a webpage.

## **Selecting and Modifying Elements - Day 21: Assignment**

### **Submission Guidelines:**
1. Read the assignment instructions in the index.js file and organize your code and files neatly in the [javascript-tasks/day-21](../javascript-tasks/day-21/) folder.
2. Make sure to save it into your own repository. **ALL** tasks will be evaluated after the submission deadline in order to claim your certificate.
