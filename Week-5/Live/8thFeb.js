const teas = [
  "Green Tea",
  "Black Tea",
  "Oolong Tea",
  "White Tea",
  "Herbal Tea",
];
// console.log(teas);

teas.push("Chamomile Tea");
// console.log(teas);

const index = teas.indexOf("Oolong tea");
if (index > -1) {
  teas.splice(index, 1);
}
// console.log(teas);

const caffinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");

console.log(teas.sort());

for (let tea of teas) {
  console.log(tea);
}

let caffinatedMyTeas = 0;
for (let tea of teas) {
  if (tea !== "Herbal Tea") {
    caffinatedMyTeas++;
  }
}
console.log(caffinatedMyTeas);

const upperCaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  upperCaseTeas.push(teas[i].toUpperCase());
}
console.log(upperCaseTeas);

let longestTea = "";
for (let tea of teas) {
  longestTea = tea;
  if (tea.length > longestTea.length) {
    longestTea = tea;
  }
}
console.log(longestTea);

const reversedTeas = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reversedTeas.push(teas[i]);
}
console.log(reversedTeas);
