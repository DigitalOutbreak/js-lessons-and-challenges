// map
// does not return a new array
// does not change size of original array
// uses values from original array when making new one

const people = [
  { name: 'bob', age: 20, job: 'developer' },
  { name: 'peter', age: 25, job: 'designer' },
  { name: 'susy', age: 30, job: 'the boss' },
  { name: 'anna', age: 35, job: 'the boss' },
];

const ages = people.map(function (person) {
  return person.age + 5;
});
const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const names = people.map(function (person) {
  return `<h1>${person.name}<h1>`;
});

document.body.innerHTML = names.join('');
console.log(names);
console.log(ages);
console.log(newPeople);
