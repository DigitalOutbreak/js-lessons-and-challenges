// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

const people = [
  { name: 'bob', age: 20, job: 'developer' },
  { name: 'peter', age: 25, job: 'designer' },
  { name: 'susy', age: 30, job: 'the boss' },
  { name: 'anna', age: 35, job: 'the boss' },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

const peopleNamedBob = people.filter(function (person) {
  return person.name == 'bob';
});

const developersOnly = people.filter(function (person) {
  return person.job == 'developer';
});

console.log(peopleNamedBob);
console.log(developersOnly);
console.log(youngPeople);
