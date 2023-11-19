**<h1 align="center"> Objects in JavaScript: Properties, Methods, and JSON </h1>**

Objects are an essential part of JavaScript and are used to represent and organize data in a structured way. In this guide, we'll explore how to create objects, work with their properties and methods, and understand JSON, which is closely related to JavaScript objects.

## **Creating Objects**

Objects in JavaScript are created by enclosing key-value pairs within curly braces `{}`.

```js
// Creating an empty object
const person = {};

// Creating an object with properties
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

// Creating an object with methods
const car = {
  brand: 'Toyota',
  model: 'Camry',
  start: function() {
    console.log('Engine started');
  },
  stop: function() {
    console.log('Engine stopped');
  },
};
```

## **Accessing Object Properties**

You can access object properties using dot notation (`.`) or square brackets `[]`.

```js
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

console.log(user.firstName); // 'John'
console.log(user['lastName']); // 'Doe'
```

## **Modifying Object Properties**

Object properties can be modified by assigning new values to them.

```js
const user = {
  firstName: 'John',
  lastName: 'Doe',
};

user.firstName = 'Alice';

console.log(user.firstName); // 'Alice'
```

## **Adding New Properties**

You can add new properties to an object at any time.

```js
const user = {
  firstName: 'John',
  lastName: 'Doe',
};

user.age = 30;

console.log(user.age); // 30
```

## **Methods**

In JavaScript, object properties can also hold functions, which are called methods.

```js
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
};

const sum = calculator.add(5, 3);
console.log(sum); // 8
```

## **Working with Objects in JavaScript - Day 18: Assignment**

### **Submission Guidelines:**
1. Read the assignment instructions in the index.js file and organize your code and files neatly in the [javascript-tasks/day-18](../javascript-tasks/day-18/) folder.
2. Make sure to save it into your own repository. **ALL** tasks will be evaluated after the submission deadline in order to claim your certificate.
