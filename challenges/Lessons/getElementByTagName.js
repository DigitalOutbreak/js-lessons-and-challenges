const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';

const items = document.getElementsByTagName('li');

const betterItems = [...items];

betterItems.forEach(function (items) {
  console.log(items);
});

console.log(items);
console.log(betterItems);

items[2].style.color = 'red';
