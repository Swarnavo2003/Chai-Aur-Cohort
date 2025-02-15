if (!Array.prototype.myAt) {
  Array.prototype.myAt = function (e) {
    let result;
    for (let i = 0; i < this.length; i++) {
      if (i === e) {
        result = this[i];
      }
    }
    return result;
  };
}

if (!Array.prototype.myConcat) {
  Array.prototype.myConcat = function (nums) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }
    result = [...result, ...nums];
    return result;
  };
}

if (!Array.prototype.myFind) {
  Array.prototype.myFind = function (userFn) {
    let result;
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result = this[i];
        break;
      }
    }
    return result;
  };
}

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (userFn) {
    let result;
    for (let i = 0; i < this.length; i++) {}
    return result;
  };
}

// at pollyfill
const array = [5, 12, 8, 130, 44];
// console.log(array.at(2));
// console.log(array.myAt(2));

// concat pollyfill
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);
const array3 = array1.myConcat(array2);
// console.log(array3);

// find pollyfill
const f = [5, 12, 8, 130, 44];
const found1 = f.find((element) => element > 10);
const found2 = f.myFind((element) => element > 10);
// console.log(found1);
// console.log(found2);

// reduce pollyfill
const reduce1 = [1, 2, 3, 4]; // 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = reduce1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
