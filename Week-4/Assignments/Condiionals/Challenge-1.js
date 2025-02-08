// You just need to implement the totalCupcakes function
function totalCupcakes(trayOne, trayTwo) {
  // Return the sum of trayOne and trayTwo
  return trayOne + trayTwo;
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Parse input (expected to be JSON string format),
  // which should contain trayOne and trayTwo
  const { trayOne, trayTwo } = JSON.parse(input);

  // Call our function
  const result = totalCupcakes(trayOne, trayTwo);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
