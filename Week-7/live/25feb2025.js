const arr = [1, [2.1, 2.2], 3, 4, 5, 6];

function enableNegIndexing(targetArr) {
  return new Proxy(targetArr, {
    set(target, prop, value) {
      target[prop] = `${value}`;
    },
    get(target, prop) {
      return target[prop];
    },
  });
}

const proxyArr = enableNegIndexing([...arr]);

console.log(`Original Arr`, arr);
console.log(`Proxy Arr`, proxyArr);

proxyArr[1] = 111;

console.log("Updated Original Arr", arr);
console.log(`Updated Proxy Arr`, proxyArr);
