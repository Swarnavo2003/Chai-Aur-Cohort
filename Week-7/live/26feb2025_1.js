if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  };
}

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      const value = cb(this[i], i);
      newArr.push(value);
    }
    return newArr;
  };
}

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, initial = undefined) {
    if (this.length === 0) return 0;
    if (this.length === 1) return this[0];
    let acc = initial || this[0];
    let startIndex = initial ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
      acc = cb(acc, this[i]);
    }
    return acc;
  };
}

const arr = [1, 2, 3, 4, 5, 6];

arr.myForEach((value, index) =>
  console.log(`At Index:${index} Value:${value}`)
);

const trippelledArray = arr.myMap((e) => e * 3);
// console.log(trippelledArray);

const result = arr.reduce((acc, curr) => acc + curr);
console.log(result);

const result2 = arr.myReduce((acc, curr) => acc + curr);
console.log(result2);
