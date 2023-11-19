**<h1 align="center">DAY 14: Conditionals</h1>**

## **Conditional Statements**

Conditional statements are like the decision-makers in your code. They help your code choose what to do based on different conditions. In this section, we'll explore four types of conditional statements: `if`, `if else`, `else if`, and `switch`.

### **IF Statement**

The `if` statement is like a gatekeeper that checks if something is true before allowing your code to take a specific action. Here's how it works:

```js
if (condition) {
  // Code to run if the condition is true
}
```

**Example:**

```js
let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside!");
}
```

In this example, the code inside the `if` block only runs if the temperature is greater than 30.

### **ELSE IF Statement**

Sometimes, you need more than one condition. That's where `else if` comes in. It's like having a backup plan if the first condition isn't met:

```js
if (condition1) {
  // Code to run if condition1 is true
} else if (condition2) {
  // Code to run if condition1 is false and condition2 is true
}
```

**Example:**

```js
let time = 14;

if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
}
```

In this example, it greets you based on the time of day.

### **ELSE Statement**

The `else` statement is like your last resort. If none of the conditions are met, it takes care of what to do by default:

```js
if (condition1) {
  // Code to run if condition1 is true
} else if (condition2) {
  // Code to run if condition2 is true
} else {
  // Code to run if neither condition1 nor condition2 is true
}
```

**Example:**

```js
let grade = 85;

if (grade >= 90) {
  console.log("You got an A!");
} else if (grade >= 80) {
  console.log("You got a B!");
} else {
  console.log("You can do better!");
}
```

In this example, it gives you a grade based on your score.

### **SWITCH Statement**

The `switch` statement is like a menu with options. It's useful when you have many possibilities to consider:

```js
switch (value) {
  case option1:
    // Code for option1
    break;
  case option2:
    // Code for option2
    break;
  default:
    // Code for when none of the options match
}
```

**Example:**

```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("The weekend is almost here!");
    break;
  default:
    console.log("It's just another day.");
}
```

In this example, it tells you what day it is.

Conditional statements make your code smart, helping it adapt to different situations, just like making decisions in everyday life! 🧠🤖

## **JavaScript Fundamentals - Day 14: Assignment**

### **Submission Guidelines:**
1. Read the assignment instructions in the index.js file and organize your code and files neatly in the [javascript-tasks/day-14](../javascript-tasks/day-14/) folder.
2. Make sure to save it into your own repository. **ALL** tasks will be evaluated after the submission deadline in order to claim your certificate.
