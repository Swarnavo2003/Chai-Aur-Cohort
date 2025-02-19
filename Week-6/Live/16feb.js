Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`);
};

function greet(name) {
  return `Hello ${name}`;
}

// console.log(greet("Swarnavo")); //! Hello Swarnavo
// greet.describe("Swarnavo"); //! Function name is greet

//? Function Declaration
function add(a, b) {
  return a + b;
}

//? Fucntion Expression
const substract = function (a, b) {
  return a - b;
};

//? Arrow Function
const multiply = (a, b) => a * b;

//? First class function
function applyOperation(a, b, operation) {
  return operation(a, b);
}
const result = applyOperation(5, 4, (x, y) => x / y);
console.log(result);

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

function onef() {
  let myName = "hitesh";
}
// console.log(myName);

(function () {
  console.log("Swarnavo");
})();
