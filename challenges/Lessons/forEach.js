// Powerful Array Methods
// forEach, map, filter, find, reduce

// forEach
// does not return new array

const people = [
  { name: 'bob', age: 20, job: 'developer' },
  { name: 'peter', age: 25, job: 'designer' },
  { name: 'susy', age: 30, job: 'the boss' },
];

function showPerson(items) {
  console.log(items.job.toUpperCase());
}

// people.forEach(showPerson);
people.forEach(function (person) {
  console.log(person.age);
});
