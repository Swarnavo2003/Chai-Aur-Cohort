//! Shallow Copy
let p1 = {
  fname: "Hitesh",
  lname: "Choudhury",
  address: { s: 1, r: 1 },
};
let p2 = { ...p1, address: { s: 2, r: 2 } };
p2.fname = "Swarnavo";
p2.lname = "Majumder";

//! Deep Copy
let p3 = {
  fname: "Hitesh",
  lname: "Choudhury",
  address: { s: 1, r: 1 },
};
const p3KaString = JSON.stringify(p3);
console.log(p3KaString);

const p4 = JSON.parse(p3KaString);
console.log(p4);
