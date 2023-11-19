// JavaScript Fundamentals - Day 21: Assignment

// Task 1: Adding Attributes

// 1. Create an HTML document with an anchor (`<a>`) element with the id "myLink" and the text "Click me".

// 2. Use JavaScript to perform the following tasks:

//    a. Add a `target="_blank"` attribute to the anchor element using the `setAttribute` method.

//    b. Log the updated anchor element to the console.

//    ```html
//    <!-- HTML Setup -->
//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>Adding Attributes with JavaScript</title>
//    </head>
//    <body>
//        <a id="myLink" href="#">Click me</a>

//        <script>
//            // JavaScript Code
//            const myLink = document.getElementById('myLink');
//            myLink.setAttribute('target', '_blank');
//            console.log(myLink);
//        </script>
//    </body>
//    </html>
//    ```

// Task 2: Adding Class Using `classList`

// 3. Create an HTML document with a `<div>` element with the id "myDiv" and the text "This is a div".

// 4. Use JavaScript to add the class "highlight" to the `<div>` element using the `classList` property.

//    ```html
//    <!-- HTML Setup -->
//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>Adding Class with JavaScript</title>
//    </head>
//    <body>
//        <div id="myDiv">This is a div.</div>

//        <script>
//            // JavaScript Code
//            const myDiv = document.getElementById('myDiv');
//            myDiv.classList.add('highlight');
//        </script>
//    </body>
//    </html>
//    ```

// Task 3: Removing Class Using `remove`

// 5. Create an HTML document with a `<div>` element with the id "myDiv" and the class "highlight".

// 6. Use JavaScript to remove the class "highlight" from the `<div>` element using the `classList` property.

//    ```html
//    <!-- HTML Setup -->
//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>Removing Class with JavaScript</title>
//    </head>
//    <body>
//        <div id="myDiv" class="highlight">This is a highlighted div.</div>

//        <script>
//            // JavaScript Code
//            const myDiv = document.getElementById('myDiv');
//            myDiv.classList.remove('highlight');
//        </script>
//    </body>
//    </html>
//    ```

// Task 4: Adding Text to HTML Element

// 7. Create an HTML document with a `<p>` element with the id "myParagraph" and any initial text content.

// 8. Use JavaScript to change the text content of the `<p>` element to a new value.

//    ```html
//    <!-- HTML Setup -->
//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>Adding Text with JavaScript</title>
//    </head>
//    <body>
//        <p id="myParagraph">This is a paragraph.</p>

//        <script>
//            // JavaScript Code
//            const myParagraph = document.getElementById('myParagraph');
//            myParagraph.textContent = 'This paragraph has new text content.';
//        </script>
//    </body>
//    </html>
//    ```

// Task 5: Adding Styles to HTML Elements in JavaScript

// 9. Create an HTML document with a `<p>` element with the id "myParagraph" and any initial text content.

// 10. Use JavaScript to perform the following tasks:

//     a. Set the text color of the `<p>` element to "red".

//     b. Set the background color of the `<p>` element to "lightgray".

//     c. Set the font size of the `<p>` element to "18px".

//     ```html
//     <!-- HTML Setup -->
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Adding Styles with JavaScript</title>
//     </head>
//     <body>
//         <p id="myParagraph">This is a paragraph.</p>

//         <script>
//             // JavaScript Code
//             const myParagraph = document.getElementById('myParagraph');
//             myParagraph.style.color = 'red';
//             myParagraph.style.backgroundColor = 'lightgray';
//             myParagraph.style.fontSize = '18px';
//         </script>
//     </body>
//     </html>
//     ```

// *These tasks will help you practice selecting and modifying elements in the DOM using various JavaScript methods. Good luck! 🚀*
