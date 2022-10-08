// Select the element or group of elements the way we want
// decude the effect we want to apply to the selection

// getElementsByClassName('classname')

// HTMLCollection

const listItems = document.getElementsByClassName('special');

console.log(listItems);

listItems[2].style.color = 'blue';
