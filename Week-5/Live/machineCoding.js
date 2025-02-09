if (!Array.prototype.myforEach) {
  Array.prototype.myforEach = function (userFn) {
    const originalArr = this; // Current
    for (let i = 0; i < originalArr.length; i++) {
      userFn(originalArr[i], i);
    }
  };
}

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i], i);
      result.push(value);
    }
    return result;
  };
}

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const arr = [1, 2, 3, 4, 5, 6];

// Error: .forEach function does not exist on arr variable
// Real Signature ko samjho

const ret = arr.myforEach(function (value, index) {
  console.log(`Value at ${index} is ${value}`);
});
// console.log("It returs", ret);

// Signature .map
// Return? - New Array, Each ele Iterat, userFn
const newArr = arr.myMap((e, index) => (index % 2 === 0 ? e * 3 : e * 6));
console.log(arr);
console.log(newArr);

// Filter
// Signature: Return - new array | input : userFn,
// Agar user ka function return true to current vakue ko new aaray mai include kar leta hai

const n3 = arr.filter((e) => e % 2 === 0);
console.log(n3);

const n4 = arr.myFilter((e) => e % 2 === 0);
console.log(n4);
