const list = document.querySelector('ul');
console.log(list);

let newItem = document.createElement('li');

newItem.innerText = 'Icy Cup';

console.log(newItem);

list.appendChild(newItem);

const firstChild = document.querySelector('ul li:first-child');
// console.log(firstChild);
let newItem1 = document.createElement('li');
newItem1.innerText = 'Protection Gained';

console.log(newItem1);

list.insertBefore(newItem1, firstChild);
