// reduce
// iterates, callback function
// reduces to a single value - number, array, object

// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const people = [
  { name: 'bob', age: 20, job: 'developer', id: 1, salary: 200 },
  { name: 'peter', age: 25, job: 'designer', id: 2, salary: 300 },
  { name: 'susy', age: 30, job: 'the boss', id: 3, salary: 500 },
  { name: 'anna', age: 35, job: 'the boss', id: 4, salary: 500 },
];

const total = people.reduce(function (acc, curr) {
  console.log(`total ${acc}`);
  console.log(`current:  ${curr.salary}`);
  acc += curr.salary;
  return acc;
  //   return acc + curr.salary;
}, 0);
// console.log(total);
