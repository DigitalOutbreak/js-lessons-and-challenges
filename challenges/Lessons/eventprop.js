// allows select dynamic elements
// events propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');
function sayHello() {
  console.log('hello');
}

btn.addEventListener('click', function () {
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `sup im sitting in a div bitch`;
  container.appendChild(element);
});
// heading.addEventListener('click', sayHello);
container.addEventListener('click', function (e) {
  if (event.target.classList.contains('heading')) {
    console.log('hello there');
  }
});
