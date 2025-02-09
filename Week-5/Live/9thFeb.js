const teas = {
  name: "Lemon tea",
  type: "Green",
  caffine: "low",
};

// console.log(teas.name);
// console.log(teas["type"]);

teas.origin = "Assam";
// console.log(teas);

teas.caffine = "medium";
// console.log(teas);

delete teas.type;
// console.log(teas);

console.log("origin" in teas);

for (let key in teas) {
  console.log(`${key}: ${teas[key]}`);
}

const myTeas = {
  greentea: { name: "Green Tea", cups: { one: "1", two: "2" } },
  blacktea: { name: "Black Tea" },
};

// const teaCopy = { ...myTeas };
// teaCopy.greentea.cups.one = 4; // Shallow copy
// console.log(myTeas);
// console.log(teaCopy);

const anotherCopy = JSON.parse(JSON.stringify(myTeas)); // Deep copy
anotherCopy.greentea.cups.one = 4;
console.log(myTeas);
console.log(anotherCopy);
