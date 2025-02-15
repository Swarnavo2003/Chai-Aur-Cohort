const obj1 = {
  fname: "Swarnavo",
  lname: "Majumder",
  getFullName: function () {
    return `${this.fname} ${this.lname}`;
  },
};

const obj2 = {
  fname: "Meri",
  lname: "Girlfriend",
};

obj2.__proto__ = obj1;

console.log(obj1.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString());
