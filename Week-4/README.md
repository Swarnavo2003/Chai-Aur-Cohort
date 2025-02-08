# ✨ Week 4: JavaScript Essentials ✨

# **Phase 2: JavaScript Surgeons 🧑‍🧕**

### **Objective:**

Gain a solid understanding of JavaScript fundamentals, functions, and control flow to write dynamic and interactive web applications.

---

## **1. JavaScript Basics – The Language of the Web**

JavaScript (JS) is a powerful scripting language that enables interactivity on websites.

### **Key Concepts:**

- **Variables & Data Types:**

  - Primitive types: `string`, `number`, `boolean`, `null`, `undefined`
  - Complex types: `object`, `array`
  - Example:
    ```js
    let name = "Spider-Man"; // string
    let age = 18; // number
    let isHero = true; // boolean
    let skills = ["Web-Slinging", "Wall-Crawling"]; // array
    ```

- **Variable Declarations:**

  - `var`: Function-scoped (legacy, avoid using)
  - `let`: Block-scoped (preferred for variables that change)
  - `const`: Block-scoped (preferred for constants)
  - Example:
    ```js
    let city = "New York";
    const power = "Super Strength";
    ```

- **Operators:**

  - Arithmetic: `+`, `-`, `*`, `/`, `%`
  - Comparison: `==` (loose), `===` (strict), `!=`, `!==`
  - Logical: `&&`, `||`, `!`
  - Example:
    ```js
    console.log(5 + 3); // 8
    console.log("5" == 5); // true (loose comparison)
    console.log("5" === 5); // false (strict comparison)
    ```

- **Control Flow Statements:**
  - Conditional Statements: `if`, `else if`, `else`, `switch`
  - Ternary Operator: `condition ? trueResult : falseResult;`
  - Example:
    ```js
    let powerLevel = 9000;
    if (powerLevel > 8000) {
      console.log("It's over 8000!");
    } else {
      console.log("Needs more training.");
    }
    ```

---

## **2. Functions – Building Blocks of JavaScript**

Functions allow us to reuse code efficiently and structure our programs logically.

### **Key Concepts:**

- **Function Declaration vs. Function Expression:**

  - Declaration:
    ```js
    function greet(name) {
      return "Hello, " + name + "!";
    }
    ```
  - Expression (Anonymous Function):
    ```js
    const greet = function (name) {
      return "Hello, " + name + "!";
    };
    ```

- **Arrow Functions (ES6+):**

  - Shorter syntax, no `this` binding
  - Example:
    ```js
    const greet = (name) => `Hello, ${name}!`;
    console.log(greet("Peter"));
    ```

- **Function Scope & Closures:**
  - Scope determines where variables are accessible
  - Closures allow functions to retain access to their outer scope
  - Example:
    ```js
    function outer() {
      let hero = "Spider-Man";
      return function inner() {
        console.log(hero);
      };
    }
    const callHero = outer();
    callHero(); // Outputs: Spider-Man
    ```

---
