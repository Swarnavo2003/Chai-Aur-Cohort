/* 
const user = {
  name: "Swarnavo",
  age: 21,
  password: "123",
};

const proxyUser = new Proxy(user, {
  get(target, prop) {
    if (prop === "password") {
      throw new Error("Access Denied");
    }
    return target[prop];
  },
});

console.log(proxyUser.password);
*/

function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
      } else {
        target[index] = value;
      }
      return true;
    },
  });
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const proxyArr = negativeIndex(arr);

// console.log(proxyArr[-1]);
// console.log(proxyArr[-2]);
// console.log(proxyArr[-3]);
// console.log(proxyArr[-4]);
// console.log(proxyArr[-5]);

proxyArr[-1] = 22;
console.log(arr);
console.log(proxyArr);
