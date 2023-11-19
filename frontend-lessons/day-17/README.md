**<h1 align="center"> Arrays: Creation, Manipulation, and Iteration </h1>**

Arrays are essential data structures in JavaScript that allow you to store and manage collections of items. Here, we'll explore how to create arrays, manipulate their contents, and iterate through their elements.

**<h2 align=center>Creating Arrays</h2>**

Arrays can be created by enclosing a list of items within square brackets `[]`.

```js
// Creating an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Creating an array of strings
const fruits = ['apple', 'banana', 'cherry'];

// Creating an array of mixed data types
const mixed = [42, 'hello', true, null];
```

## **Accessing Array Elements**

Array elements are accessed using square brackets and their index. Remember that array indices **start at 0.**

```js
const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'
```

**<h2 align=center>Modifying Arrays</h2>**

Arrays are mutable, so you can change their contents by assigning new values to specific indices or using various array methods.

### **Changing Array Elements**

```js
const numbers = [1, 2, 3, 4, 5];

numbers[2] = 42; // Replaces the third element with 42

console.log(numbers); // [1, 2, 42, 4, 5]
```

### **Adding and Removing Elements**

You can add elements to the end of an array using the `push()` method and remove the last element using the `pop()` method.

```js
const fruits = ['apple', 'banana'];

fruits.push('cherry'); // Adds 'cherry' to the end

fruits.pop(); // Removes 'cherry'

console.log(fruits); // ['apple', 'banana']
```

### **Iterating Through Arrays**

You can loop through array elements using various techniques, such as `for` loops and array methods like `forEach()`.

#### **Using a `for` Loop**

```js
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

#### **Using `forEach()`**

The `forEach()` method is a cleaner way to iterate through arrays and execute a function on each element.

```js
const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

#### **Using the `map()` Method**

The `map()` method creates a new array by applying a function to each element of the original array.

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

**<h2 align=center>Adding and Removing Array Elements</h2>**

You can add or remove elements at the beginning of an array using the `unshift()` and `shift()` methods, respectively.

```js
const colors = ['red', 'green', 'blue'];

colors.unshift('yellow'); // Adds 'yellow' at the beginning

colors.shift(); // Removes 'yellow'

console.log(colors); // ['red', 'green', 'blue']
```

### **Slicing and Splicing Arrays**

The `slice()` method allows you to create a new array by extracting a portion of an existing array.

```js
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

const firstQuarter = months.slice(0, 3);

console.log(firstQuarter); // ['Jan', 'Feb', 'Mar']
```

The `splice()` method is used for both adding and removing elements from an array.

```js
const numbers = [1, 2, 3, 4, 5];

numbers.splice(2, 0, 6); // Inserts 6 at index 2

console.log(numbers); // [1, 2, 6, 3, 4, 5]

numbers.splice(1, 2); // Removes 2 elements starting from index 1

console.log(numbers); // [1, 3, 4, 5]
```

### **Filtering Arrays**

The `filter()` method creates a new array by filtering elements based on a provided condition.

```js
const scores = [85, 90, 72, 88, 95, 62];

const passed = scores.filter(function(score) {
  return score >= 75;
});

console.log(passed); // [85, 90, 88, 95]
```

> These are the fundamentals of working with arrays in JavaScript. They are versatile and can be used for a wide range of data manipulation tasks in your programs.

## **Working with Arrays in JavaScript - Day 17: Assignment**

### **Submission Guidelines:**
1. Read the assignment instructions in the index.js file and organize your code and files neatly in the [javascript-tasks/day-17](../javascript-tasks/day-17/) folder.
2. Make sure to save it into your own repository. **ALL** tasks will be evaluated after the submission deadline in order to claim your certificate.
