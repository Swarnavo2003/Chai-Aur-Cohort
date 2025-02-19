const display = document.getElementById("display");

const appendToInput = (input) => {
  display.value += input;
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};

const clearInput = () => {
  display.value = "";
};

const clearOneInput = () => {
  display.value = display.value.slice(0, -1);
};
