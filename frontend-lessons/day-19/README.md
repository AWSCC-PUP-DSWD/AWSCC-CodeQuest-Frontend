**<h1 align="center">JSON (JavaScript Object Notation)</h1>**

JSON is a popular data interchange format that closely resembles JavaScript objects. JSON data is represented as a collection of key-value pairs.

```js
// JSON data
const person = {
  "firstName": "John",
  "lastName": "Doe",
  "age": 30
};
```

- JSON property names must be enclosed in double quotes.
- JSON values can be strings, numbers, objects, arrays, booleans, or `null`.

Converting between JavaScript objects and JSON:

#### **JavaScript Object to JSON**

You can convert a JavaScript object to a JSON string using the `JSON.stringify()` method.

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const personJSON = JSON.stringify(person);

console.log(personJSON); // '{"firstName":"John","lastName":"Doe","age":30}'
```

#### **JSON to JavaScript Object**

You can convert a JSON string to a JavaScript object using the `JSON.parse()` method.

```js
const personJSON = '{"firstName":"John","lastName":"Doe","age":30}';

const person = JSON.parse(personJSON);

console.log(person.firstName); // 'John'
```

**JSON** is commonly used for data exchange between a server and a web application, as well as for configuration files and data storage. Understanding how to work with objects and JSON is crucial for any JavaScript developer.

## **Working with JSON in JavaScript - Day 19: Assignment**

### **Submission Guidelines:**
1. Read the assignment instructions in the index.js file and organize your code and files neatly in the [javascript-tasks/day-19](../javascript-tasks/day-19/) folder.
2. Make sure to save it into your own repository. **ALL** tasks will be evaluated after the submission deadline in order to claim your certificate.
