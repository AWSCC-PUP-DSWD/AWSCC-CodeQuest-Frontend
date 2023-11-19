**<h1 align="center">DAY 20: Interacting with the Document Object Model (DOM) </h1>**
## **Document Object Model (DOM):**

The DOM represents the structure of an HTML document in a tree-like structure. Each element in an HTML document is a node in this tree. You can use JavaScript to interact with and manipulate this tree, changing the content and appearance of a webpage dynamically. Every HTML element has properties that allow manipulation through JavaScript. You can get, create, append, or remove HTML elements using JavaScript. To select HTML elements, you can use tag names, IDs, class names, or other attributes.

### **Getting Element:**

*Here's an HTML example that demonstrates how to select elements using various methods:*

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Selecting Elements</title>
</head>
<body>
<h2>Selecting Elements</h2>

<p>This is a paragraph.</p>
<p class="info">This is an informative paragraph.</p>
<p class="info">Another informative paragraph.</p>

<div id="header">This is a header.</div>
<p>This is another paragraph.</p>
<p class="highlight">This paragraph is highlighted.</p>

<script>
// Getting Elements by Tag Name:
const paragraphs = document.getElementsByTagName("p");
console.log("Paragraphs:", paragraphs);

// Getting Elements by Class Name:
const infoElements = document.getElementsByClassName("info");
console.log("Info Elements:", infoElements);

// Getting an Element by ID:
const headerElement = document.getElementById("header");
console.log("Header Element:", headerElement);

// Getting Elements by Using querySelector Methods:
const highlightElement = document.querySelector(".highlight");
console.log("Highlight Element:", highlightElement);
</script>
</body>
</html>
```

In this HTML example, you have various elements with different tags, class names, and an ID. The JavaScript code demonstrates how to select these elements using the methods you mentioned. The selected elements are logged to the console for verification.

### **Getting Elements by Tag Name:**
You can select elements by their HTML tag name using the `getElementsByTagName()` method in JavaScript. This method allows you to retrieve all elements with the specified tag name on a web page. Here's how it works:

1. **HTML Setup:** You have an HTML document with various elements, some of which have the same tag name. For example:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
      <title>Getting Elements by Tag Name</title>
   </head>
   <body>
      <h1>First Heading</h1>
      <p>This is a paragraph.</p>
      <h2>Second Heading</h2>
      <p>Another paragraph.</p>
   </body>
   </html>
   ```

2. **JavaScript Code:** In your JavaScript code, you can use `getElementsByTagName()` to select elements by their tag name. For example, to get all the `<p>` elements on the page:

   ```javascript
   const paragraphs = document.getElementsByTagName("p");
   ```

3. **Result:** The `paragraphs` variable now holds an HTMLCollection, which is an array-like object containing all the `<p>` elements on the page. You can access individual elements within this collection using their index, similar to how you access elements in an array:

   ```javascript
   console.log(paragraphs);  // HTMLCollection of <p> elements
   console.log(paragraphs.length);  // Number of <p> elements (in this case, 2)

   for (let i = 0; i < paragraphs.length; i++) {
      console.log(paragraphs[i]);  // Access and log each <p> element
   }
   ```

> Keep in mind that `getElementsByTagName()` returns an HTMLCollection, which is not a real array, so it lacks some array methods. You may need to loop through it using a regular for loop as shown above. This method allows you to access and manipulate multiple elements with the same tag name in your HTML document.
> 
> It's important to note that the `getElementsByTagName()` method returns a live collection. This means that if you add or remove elements with the specified tag name, the collection will automatically update to reflect these changes.

Here are a few more things to consider when using `getElementsByTagName()`:

- You should specify the tag name as a string within the parentheses, such as "p" for `<p>` elements or "h1" for `<h1>` elements.

- The method returns all matching elements within the entire document. If you want to limit the search to a specific part of the document, you can use it in conjunction with other methods or by starting the search from a specific element within the DOM.

- When you access an element from the HTMLCollection, it's represented as a regular DOM element, and you can further manipulate it using JavaScript.

### Getting Elements by Class Name:
You can select elements by their CSS class name using the `getElementsByClassName()` method in JavaScript. This method allows you to retrieve all elements with a specified class name on a web page. Here's how it works:

1. **HTML Setup:** You have an HTML document with various elements, some of which have the same class name. For example:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
      <title>Getting Elements by Class Name</title>
   </head>
   <body>
      <h1 class="title">Title 1</h1>
      <p class="info">This is an informative paragraph.</p>
      <p class="info">Another informative paragraph.</p>
      <div class="highlight">This is a highlighted div.</div>
   </body>
   </html>
   ```

2. **JavaScript Code:** In your JavaScript code, you can use `getElementsByClassName()` to select elements by their class name. For example, to get all elements with the class name "info":

   ```javascript
   const infoElements = document.getElementsByClassName("info");
   ```

3. **Result:** The `infoElements` variable now holds an HTMLCollection, which is an array-like object containing all the elements with the class "info" on the page. You can access individual elements within this collection using their index:

   ```javascript
   console.log(infoElements);  // HTMLCollection of elements with class "info"
   console.log(infoElements.length);  // Number of elements with class "info" (in this case, 2)

   for (let i = 0; i < infoElements.length; i++) {
      console.log(infoElements[i]);  // Access and log each element with class "info"
   }
   ```

Similar to `getElementsByTagName()`, `getElementsByClassName()` returns a live collection. If you add or remove elements with the specified class name, the collection will automatically update to reflect these changes.

> Here are some important considerations when using `getElementsByClassName()`:
>
>- You should specify the class name as a string within the parentheses, such as "info" for elements with the class "info."
>
>- The method returns all matching elements within the entire document. If you want to limit the search to a specific part of the document, you can use it in conjunction with other methods or by starting the search from a specific element within the DOM.
>
>- When you access an element from the HTMLCollection, it's represented as a regular DOM element, and you can further manipulate it using JavaScript.

### **Getting an Element by ID:**

You can select a single element by its unique ID using the `getElementById()` method in JavaScript. This method allows you to retrieve an element with a specific ID from a web page. Here's how it works:

1. **HTML Setup:** You have an HTML document with various elements, and one of them has a unique ID. For example:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
      <title>Getting an Element by ID</title>
   </head>
   <body>
      <h1 id="header">This is a header.</h1>
      <p>This is a paragraph.</p>
      <div>This is a div.</div>
      <p>Another paragraph.</p>
   </body>
   </html>
   ```

2. **JavaScript Code:** In your JavaScript code, you can use `getElementById()` to select an element by its unique ID. For example, to get the element with the ID "header":

   ```javascript
   const headerElement = document.getElementById("header");
   ```

3. **Result:** The `headerElement` variable now holds the HTML element with the ID "header." You can directly access and manipulate this element using JavaScript:

   ```javascript
   console.log(headerElement);  // The element with ID "header"
   headerElement.textContent = "Updated Header";  // Change the text content of the element
   ``` 

A few important points to note about `getElementById()`:

- You should specify the ID as a string within the parentheses, such as "header" for the element with the ID "header."

- Unlike `getElementsByTagName()` and `getElementsByClassName()`, `getElementById()` returns a single element, not a collection. It directly provides access to the selected element.

- IDs must be unique within the HTML document. There should be only one element with a given ID.

- If the specified ID does not exist in the document, `getElementById()` returns `null`. It's important to check for `null` to avoid errors when working with the result.


### **Getting Elements by Using `querySelector` Methods:**
You can select elements by their tag name, ID, or class name using the `querySelector` and `querySelectorAll` methods in JavaScript. These methods allow you to retrieve elements from a web page using CSS-style selectors. Here's how they work:

1. **HTML Setup:** You have an HTML document with various elements. For example:

   ```html
   <!DOCTYPE html>
   <html>
   <head>
      <title>Getting Elements with QuerySelectors</title>
   </head>
   <body>
      <h1>First Heading</h1>
      <p class="info">This is an informative paragraph.</p>
      <h2>Second Heading</h2>
      <p class="info">Another informative paragraph.</p>
      <div class="highlight">This is a highlighted div.</div>
   </body>
   </html>
   ```

2. **JavaScript Code:** In your JavaScript code, you can use the `querySelector` method to select elements using CSS-style selectors. For example:

   - To get the first available `<h1>` element:
   ```javascript
   const firstHeading = document.querySelector('h1');
   ```

   - To get an element by its ID, such as "header":
   ```javascript
   const headerElement = document.querySelector('#header');
   ```

   - To get the first available element with the class "info":
   ```javascript
   const infoElement = document.querySelector('.info');
   ```

3. **Result:** The `firstHeading`, `headerElement`, and `infoElement` variables now hold references to the selected elements. You can directly access and manipulate these elements using JavaScript:

   ```javascript
   console.log(firstHeading);  // The first <h1> element
   console.log(headerElement);  // The element with ID "header"
   console.log(infoElement);  // The first element with class "info"
   ```

The `querySelectorAll` method is similar, but it returns a `NodeList`, which is an array-like object containing all matching elements, rather than just the first match. Here's an example:

   ```javascript
   const allInfoElements = document.querySelectorAll('.info');
   ```

Then, you can loop through the `allInfoElements` NodeList to access and manipulate the selected elements:

   ```javascript
   for (let i = 0; i < allInfoElements.length; i++) {
      console.log(allInfoElements[i]);  // Access and log each element with class "info"
   }
   ```

>**Key points to note:**
>- The `querySelector` and `querySelectorAll` methods allow you to use CSS-style selectors to select elements.
>- `querySelector` returns the first matching element, while `querySelectorAll` returns all matching elements.
>- You can select elements by their tag names, IDs, class names, and more using these methods.

## **Interacting with the Document Object Model (DOM) - Day 20: Assignment**

### **Submission Guidelines:**
1. Read the assignment instructions in the index.js file and organize your code and files neatly in the [javascript-tasks/day-20](../javascript-tasks/day-20/) folder.
2. Make sure to save it into your own repository. **ALL** tasks will be evaluated after the submission deadline in order to claim your certificate.
