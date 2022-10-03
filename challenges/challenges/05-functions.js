// ## Functions #5

// 1. create "calculateTotal" function
// 2. add two parameters subTotal, tax
// 3. return sum of parameters
// 4. create 3 vars "order1","order2","order3"
// 5. call calculateResult, pass in some values and assign result to each order
// 6. log all three orders
// 7. refactor "calculateTotal" to function expression

function calculateTotal(subTotal, tax) {
  return subTotal + tax;
}

const order1 = calculateTotal(9.99, 3.13);
const order2 = calculateTotal(12.99, 4.13);
const order3 = calculateTotal(8.99, 2.13);

console.log(order1, order2, order3);

const calculateAll = function (subTotal, tax) {
  return subTotal + tax;
};
const order4 = calculateAll(9.99, 3.13);
const order5 = calculateAll(12.99, 4.13);
const order6 = calculateAll(8.99, 2.13);

console.log(order4, order5, order6);
