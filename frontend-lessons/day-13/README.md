**<h1 align="center"> DAY 13: JavaScript Fundamentals </h1>**

## **Variables**

Variables are like containers that store data. Think of them as boxes in your computer's memory where you can put different kinds of information. When you create a variable, you're telling the computer to set aside a special spot in its memory to hold a piece of data. There are three ways to create variables in JavaScript: using `var`, `let`, or `const`.

- **let**: This is for variables that can change. If you want to put different values in your variable at different times, use `let`.

- **const**: This is for variables that never change. If you have a value that should stay the same all the time, use `const`. For example, you can use `const` for things like mathematical constants or country names.

- **var**: We won't use this in this lesson because it's a bit tricky and can lead to errors.

## **Rules for Variable Names:**

1. Variable names **CANNOT** start with a number.
2. They can't have special characters except for the dollar sign ($) and underscore (_).
3. Variable names usually follow a style called camelCase, where you start with a lowercase letter and capitalize the first letter of each new word within the name.  
(e.g. firstName, ageOfPerson, totalAmount, isHappy)
4. There can't be spaces in variable names.

*Here are some examples of valid variable names:*

> `firstName`  
`ageOfPerson`  
`totalAmount`  
`isHappy`

*And here are some examples of invalid variable names:*

>`2ndPlace` (starts with a number)  
`my@variable` (contains a special character)  
`full Name` (has a space)

By using variables, you can store and manage different types of data in your JavaScript code, making it easier to work with information in your programs.

To create a variable, you write its name, use an equal sign (`=`), and then put the data you want to store in the variable. Here's how you create variables:

```javascript
let firstName = 'John';  // First name of a person
let age = 25;            // Age in years
const PI = 3.14;         // The mathematical constant π
```

In these examples, we created three variables: `firstName`, `age`, and `PI`. The data they store are a name, an age, and a number. The `let` keyword is used for variables that can change, and the `const` keyword is used for variables that won't change.

## **Introduction to Data Types**

In JavaScript, data types are like different kinds of things you can use in your code. It's a way to tell the computer what kind of information you're working with. There are a few basic data types you should know about.

### **Primitive Data Types**

Primitive data types in JavaScript are like the building blocks of information. Once they're created, they can't be changed (immutable). For example:

```javascript
let word = 'JavaScript'
word[0] = 'Y' // This won't work because strings are immutable.
```
*Below are some examples of primitive data types*

### **Numbers**

Numbers can be whole numbers like 5 or decimals like 3.14. For example:  

```javascript
// Whole number
const five = 5;

// Decimal number
const pi = 3.14;

// Mathematical operations with numbers
const sum = five + pi;
const difference = five - pi;
const product = five * pi;
const quotient = five / pi;

// Displaying numbers to the console
console.log(five); // 5
console.log(pi); // 3.14
console.log(sum); // 8.14
console.log(difference); // 1.86
console.log(product); // 15.7
console.log(quotient); // 1.5925925925925926
```

### **Strings**

Strings are used for text and are enclosed in single quotes (''), double quotes (" "), or backticks (``).

```javascript
// String enclosed in single quotes
const name = 'Alf';

// String enclosed in double quotes
const greeting = "Hello, world!";

// String enclosed in backticks
const template = `My name is ${name}.`;

// String concatenation
const fullName = name + ' ' + 'AWS';

// Displaying strings to the console
console.log(name); // Alf
console.log(greeting); // Hello, world!
console.log(template); // My name is Alf.
console.log(fullName); // Alf AWS
```

If you want to learn more about string, and its methods. 
***Visit here!***  
[W3Schools - String Methods](https://www.w3schools.com/js/js_string_methods.asp)

### **Booleans**

Booleans represent only two values: `true` or `false`.

### **Null**

Null means there is no value at all. It's like having an empty box.

```js
let myVariable = null;
console.log(myVariable); // Output: null
```

### **Undefined**

Undefined is used when a variable is declared but hasn't been given a value yet.

```js
let myVariable;
console.log(myVariable); // Output: undefined
```

> In JavaScript, "null" means there's nothing there on purpose; it's like an empty box you intentionally left empty. "Undefined," on the other hand, is when you forget to put something in the box in the first place. It's important to know this difference because it can affect how your code works and helps you prevent unexpected issues.

### **Symbol**

Symbols are unique and are usually generated using the Symbol constructor.

## **Non-Primitive Data Types (Object References)**

Non-primitive data types can change (mutable) and include:

### **Objects**

Objects are like containers for multiple data values. You can think of them as collections of properties and their values.

### **Arrays**

Arrays are used to store lists of items, like numbers or strings. Each item in an array has a position, starting from 0.

Let's see some examples to understand the difference between these two types:

## **Primitive vs. Non-Primitive Data Types**

### **Non-Primitive Data Types**

Non-primitive data types are like clay; you can mold and change them. 

**For example**

```javascript
let nums = [1, 2, 3]
nums[0] = 111 // You can change the values in an array.
console.log(nums)  // [111, 2, 3]
```

### **Comparing Data Types**

You can compare primitive data types based on their values:

```javascript
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             // false

let lightOn = true
let lightOff = false
console.log(lightOn == lightOff) // false
```

However, non-primitive data types are compared by reference, not value. So, two objects with the same properties and values won't be strictly equal:

```javascript
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}

let userTwo = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}

console.log(userOne == userTwo) // false
```

In simple terms, primitive data types are like stones that can't change, while non-primitive data types are like clay that can be molded. Don't worry if it's a bit confusing; you can always come back to this later.

**<h2 align="center">Checking Data Types in JavaScript**</h2>

In JavaScript, we often need to figure out what type of data we're working with. This is important because different data types behave differently. Let's learn how to check the data type of a value:

### **Using `typeof`**

We can use the `typeof` operator to determine the data type of a value. Here are some examples:

```javascript
typeof 42; // "number"
typeof 'Hello'; // "string"
typeof true; // "boolean" 
typeof undefined; // "undefined"
```

**<h2 align="center">Operators: Your JavaScript Superpowers</h2>**

Operators in JavaScript are like the superpowers you use to make your code do amazing things. Let's explore some of these superpowers:

### **Assignment Operators**

Assignment operators are like magic wands for creating and naming things in your code. They help you give names to values.

```js
let yourAge = 15;          // You just named your age!
let yourName = "John";     // Your name has a superpower now!
```

### **Arithmetic Operators**

Arithmetic operators are like the tools you use to do math in your code. They help you with addition, subtraction, and more.

- **Addition (+):** Adds numbers together, like 5 + 3 = 8.
- **Subtraction (-):** Subtracts one number from another, like 10 - 4 = 6.
- **Multiplication (*):** Helps you multiply numbers, like 6 * 2 = 12.
- **Division (/):** It's like sharing candies, for example, 8 / 2 = 4.
- **Modulus (%):** Finds the leftover candies when you share, like 7 % 3 = 1.
- **Exponential (**):** Supercharges a number, for example, 2 ** 3 = 8.

```js
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;       // You just added two numbers!
let diff = numOne - numTwo;      // Subtraction magic!
let mult = numOne * numTwo;      // Multiplication power!
let div = numOne / numTwo;       // Division action!
let remainder = numOne % numTwo; // Leftover candies!
let powerOf = numOne ** numTwo;  // Supercharged!

console.log(sum, diff, mult, div, remainder, powerOf); // 7, 1, 12, 1.33, 1, 64 
```

### **Comparison Operators**

Comparison operators are like detectives who help you compare things and find out if they are true or false.

- **Greater than (>):** Checks if one thing is bigger than another.
- **Less than (<):** Checks if one thing is smaller.
- **Equal to (==):** Sees if two things are the same.
- **Not equal to (!=):** Checks if two things are different.
- **Greater than or equal to (>=):** Checks if something is bigger or equal.
- **Less than or equal to (<=):** Checks if something is smaller or equal.
- **Strict equality (===):** Checks if two things are exactly the same.
- **Strict inequality (!==):** Checks if two things are not exactly the same.

```js
console.log(3 > 2);       // True, because 3 is bigger than 2!
console.log(3 == '3');    // True, just compare the value!
console.log(3 === '3');   // False, it checks value and type!
console.log(2 != 3);      // True, because 2 is not 3!
console.log(2 <= 3);      // True, because 2 is less than 3!
```

### **Logical Operators**

Logical operators are like puzzle pieces that help you solve complex problems. They let you combine conditions.

- **AND (&&):** Both conditions must be true.
- **OR (||):** At least one condition must be true.
- **NOT (!):** It's like flipping true to false and vice versa.

```js
let isSunny = true;
let isWarm = true;

if (isSunny && isWarm) {
  console.log("Let's go to the beach!");
} else {
  console.log("Stay home and watch a movie.");
}
```

### **Increment and Decrement Operators**

Increment and decrement operators are like counting steps. They help you count up and down quickly.

- **Increment (++):** Adds 1 to a number.
- **Decrement (--):** Takes away 1 from a number.

```js
let count = 0;
count++;  // Count goes up by 1
count--;  // Count goes down by 1
```

> With this foundational knowledge, you're well on your way to becoming a proficient JavaScript developer. Keep practicing, experimenting, and learning, and you'll soon be creating your own web applications and much more!

## **JavaScript Fundamentals - Day 13: Assignment**

### **Submission Guidelines:**
1. Read the assignment instructions in the index.js file and organize your code and files neatly in the [javascript-tasks/day-13](../javascript-tasks/day-13/) folder.
2. Make sure to save it into your own repository. **ALL** tasks will be evaluated after the submission deadline in order to claim your certificate.

***With these exercises, you'll deepen your understanding of JavaScript fundamentals and gain confidence in working with variables, data types, logical operators, and more! Keep up the great work!***

