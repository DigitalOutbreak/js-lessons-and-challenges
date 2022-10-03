// // 1 inch = 2.54cm
// const wallHeight = 80;

// function convert(value) {
//   console.log("The Value in cm is : " + value * 2.54 + "cm");
//   return value * 2.54;
// }

// const width = convert(100);
// const height = convert(wallHeight);
// const dimensions = [width, height];
// console.log(dimensions);

function addValues(num1, num2) {
  return num1 + num2;
}

const firstAnswr = addValues(3, 4);
const secondAnswr = addValues(12, 34);
// function expression
const addd = function (num1, num2) {
  return num1 + num2;
};

// const thirdValue = add(2, 2);
const values = [firstAnswr, secondAnswr, addd(2, 2)];
console.log(values);

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2, 4));
