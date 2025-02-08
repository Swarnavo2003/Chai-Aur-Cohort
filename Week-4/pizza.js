let numberOfGuest = 4;
let pizzaSize;

if (numberOfGuest <= 2) {
  pizzaSize = "smaill";
} else if (numberOfGuest <= 5) {
  pizzaSize = "medium";
} else {
  pizzaSize = "large";
}

console.log(pizzaSize);
