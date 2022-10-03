//  Callback functions, higher order functions, functions as first class objects/citizens

// function greetMorning(name) {
//   const myName = 'jon';
//   console.log(`goodmorning ${name} my name is ${myName}`);
// }
// function greetAfternoon(name) {
//   const myName = 'su';
//   console.log(`goodafternoon ${name} my name is ${myName}`);
// }
// function morning(name) {
//   return `Goodmorning ${name.toUpperCase()}`;
// }

// function greet(name, cb) {
//   const myName = 'john';
//   console.log(` ${cb(name)}, my name is ${myName}`);
// }

// greet('bobo', morning);
// CALLBACK
function morning(name) {
  return `Goodmorning, ${name.toUpperCase()}!`;
}
// CALLBACK
function afternoon(name) {
  return `Goodafternoon, ${name.repeat(3)}`;
}
// CALLBACK
function evening(name) {
  return `Goodevening, ${name}`;
}
// HIGHERODER FUNCTION
function greet(yourName, myName, cb) {
  myName;
  console.log(`${cb(yourName)} my name is ${myName}`);
}

greet('bob', 'joey', morning);
greet('bob', 'bobo', afternoon);
greet('bob', 'goose', evening);
