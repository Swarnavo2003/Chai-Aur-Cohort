function greet(name) {
  console.log(`Hello ${name}`);
}

// greet("Swarnavo");

let globalVar = "I am global";

function modifyGlobal() {
  globalVar = "I am modified";
  let blockScaopedVar = "I am blocked-scoped";
  console.log(blockScaopedVar);
}

// modifyGlobal();

/* 
let config = (function () {
  let settings = {
    theme: "dark",
  };
  console.log(settings);
})();
*/

/* 
(() => {
  console.log("Immediate Execution");
})();
*/

let person1 = {
  name: "Swarnavo",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
// person1.greet();

let person2 = {
  name: "hitesh",
};

const bindGreet = person1.greet.bind(person2);
bindGreet();
// person1.greet.call(person2);
