// JavaScript Fundamentals - Day 22: Assignment

// 1. Create an HTML document with a `<div>` element having the id "dynamicContainer". This will be the container where dynamically created elements will be added.

// 2. Use JavaScript to create an `<img>` element dynamically. Set the `src` attribute to an image URL, and append it to the "dynamicContainer" div.

//    ```html
//    <!-- HTML Setup -->
//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>Creating an Element with JavaScript</title>
//    </head>
//    <body>
//        <div id="dynamicContainer">
//            <!-- Dynamically created elements will be added here -->
//        </div>

//        <script>
//            // JavaScript Code
//            const dynamicContainer = document.getElementById('dynamicContainer');

//            // Create a new img element
//            const newImage = document.createElement('img');

//            // Set attributes
//            newImage.src = 'https://example.com/image.jpg';
//            newImage.alt = 'Dynamically created image';

//            // Append the new element to the container
//            dynamicContainer.appendChild(newImage);
//        </script>
//    </body>
//    </html>
//    ```

// ### **Task 2: Removing DOM Elements**

// 3. Create an HTML document with a list (`<ul>`) containing list items (`<li>`).

// 4. Use JavaScript to perform the following tasks:

//    a. Select and remove a specific list item using the `removeChild()` method.

//    b. Remove the last list item using the `remove()` method.

//    c. Clear all list items from the `<ul>` using the `innerHTML` property.

//    ```html
//    <!-- HTML Setup -->
//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>Removing DOM Element</title>
//    </head>
//    <body>
//        <ul id="myList">
//            <li>Item 1</li>
//            <li>Item 2</li>
//            <li>Item 3</li>
//            <li>Item 4</li>
//        </ul>

//        <script>
//            // JavaScript Code
//            const myList = document.getElementById('myList');

//            // a. Select and remove a specific list item
//            const itemToRemove = myList.children[1]; // Selecting the second item
//            myList.removeChild(itemToRemove);

//            // b. Remove the last list item
//            const lastItem = myList.lastElementChild;
//            lastItem.remove();

//            // c. Clear all list items using innerHTML
//            myList.innerHTML = '';
//        </script>
//    </body>
//    </html>
//    ```