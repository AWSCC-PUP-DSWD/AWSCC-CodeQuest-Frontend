**<h1 align="center">DAY 16: FUNCTIONS</h1>**

## **Functions**

Think of functions as super helpful tools in your coding toolbox. They're like mini-programs that can do specific tasks for you. Functions are essential because they:

- **Keep your code clean and easy to understand.**
- **Let you reuse code instead of writing it over and over.**
- **Make testing and fixing issues easier.**

*Functions can be created in different ways:*

- [**Functions**](#functions)
  - [**Function Declaration without Parameters and Return**](#function-declaration-without-parameters-and-return)
  - [**Functions with Parameters**](#functions-with-parameters)
  - [**Functions that Return Values**](#functions-that-return-values)
  - [**Functions with Many Parameters**](#functions-with-many-parameters)
  - [**Default Parameters**](#default-parameters)
  - [**Arrow Functions**](#arrow-functions)
  - [**Anonymous Functions**](#anonymous-functions)
  - [**Self-Invoking Functions**](#self-invoking-functions)
- [**JavaScript Fundamentals - Day 16: Assignment**](#javascript-fundamentals---day-16-assignment)
  - [**Submission Guidelines:**](#submission-guidelines)

### **Function Declaration without Parameters and Return**

Functions can be simple or more complex. Here's an example of a basic function that doesn't take any parameters and doesn't return a value:

```js
function greet() {
  console.log("Hello there!");
}

greet(); // Call the function
```

### **Functions with Parameters**

Sometimes, you want your function to take some input. You can do that by adding parameters inside the parentheses when you declare the function:

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Call the function with an argument
```

### **Functions that Return Values**

Functions can also be like a magic box that gives you something back. Here's an example of a function that returns a value:

```js
function addNumbers(a, b) {
  return a + b;
}

const result = addNumbers(5, 3); // Call the function and store the result
console.log(result); // Outputs 8
```

### **Functions with Many Parameters**

You can have functions that take multiple parameters. They can be really useful when you need to work with lots of data:

```js
function calculateAverage(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}

const numbers = [12, 34, 56, 78, 90];
const average = calculateAverage(numbers);

console.log(`The average is ${average}`);
```

In this example, the function `calculateAverage` takes an array of numbers as a parameter and returns the average.

### **Default Parameters**

You can set default values for function parameters, which will be used if no argument is provided for that parameter.

```js
// Function with default parameters
function greetWithDefault(name = 'friend') {
  console.log(`Hello, ${name}!`)
}

greetWithDefault(); // No argument provided, so the default is used
greetWithDefault('Bob'); // Custom name provided
```

### **Arrow Functions**

Arrow functions provide a more concise way to write functions, especially when they have a single expression. They use the `=>` syntax to declare functions.

```js
// Arrow function
const subtract = (a, b) => a - b;

const difference = subtract(10, 4);
console.log(`The difference is: ${difference}`);
```

### **Anonymous Functions**

Anonymous functions are functions without a name. They are often used when functions are used as arguments to other functions.

```js
// Anonymous function
const saySomething = function(message) {
  console.log(message);
};

saySomething('This is an anonymous function.');
```

### **Self-Invoking Functions**

Self-invoking functions are anonymous functions that are executed immediately after they are defined.

```js
// Self-invoking function
(function() {
  console.log('I am self-invoking!');
})();
```
## **JavaScript Fundamentals - Day 16: Assignment**

### **Submission Guidelines:**
1. Read the assignment instructions in the index.js file and organize your code and files neatly in the [javascript-tasks/day-16](../javascript-tasks/day-16/) folder.
2. Make sure to save it into your own repository. **ALL** tasks will be evaluated after the submission deadline in order to claim your certificate.
