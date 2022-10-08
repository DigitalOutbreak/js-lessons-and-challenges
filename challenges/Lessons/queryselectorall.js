// Select The element or group of elements the we want
// Decide the effect we want to apply to the selection

// QuerySelector('any css'); - selects single
// qeurySelectorAll('any css') - selects all

const result = document.querySelector('#result');

result.style.backgroundColor = 'blue';

const item = document.querySelector('.special');

const lastItem = document.querySelector('li:last-child');

const list = document.querySelectorAll('li');
list.forEach(function (item) {
  console.log(item);
  item.style.color = 'black';
});
