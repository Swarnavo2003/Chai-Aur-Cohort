function sumFac(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

let myArray = [1, 4, 2, 3, 5, 6];
console.log(sumFac(myArray));
