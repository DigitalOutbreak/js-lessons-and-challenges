// select the element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColors() {
  console.log('hello');
}
btn.addEventListener('click', changeColors);
