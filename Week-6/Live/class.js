class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
}

const person1 = new Person("Swarnavo", "Majumder");
const person2 = new Person("Meri", "Girlfriend");

console.log(person1.getFullName());
console.log(person2.getFullName());
