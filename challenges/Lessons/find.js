// find
// returns a single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value

const people = [
  { name: 'bob', age: 20, job: 'developer', id: 1 },
  { name: 'peter', age: 25, job: 'designer', id: 2 },
  { name: 'susy', age: 30, job: 'the boss', id: 3 },
  { name: 'anna', age: 35, job: 'the boss', id: 4 },
];
const names = ['bob', 'susy', 'anna'];

console.log(
  names.find(function (person) {
    // if zelda doesnt exist show undefined, try a name that exists
    return person === 'zelda';
  })
);

const person = people.find(function (person) {
  return person.id === 3;
});

console.log(person.name);

const person2 = people.filter(function (person) {
  return person.id === 3;
});

console.log(person2[0].name);
