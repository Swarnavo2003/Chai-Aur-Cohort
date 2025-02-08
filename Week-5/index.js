const person = {
  x: 10,
  firstName: "Swarnavo",
  lastName: "Majumder",
  hobbies: ["Coding", "Gym", "Watching Anime"],
  isMarried: false,
  hasGF: false,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  address: {
    hno: 1,
    street: 1,
    counttyCode: "IN",
    state: "PB",
  },
};
console.log(person.hobbies);
console.log(person.getFullName());
console.log(person.address);

const remotw = {
  color: "black",
  brand: "XYZ",
  dimesions: { height: 1, width: 1 },
  turnOff: function () {},
  volumeUp: function () {},
};
