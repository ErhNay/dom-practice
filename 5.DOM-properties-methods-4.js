// Creating and Adding Elements

const list = document.querySelector('ul');

// Adding content to the newly created element
// newItem.innerText = 'Norbert';
// Appending the newly created Element to a ParentElement

for (let i = 0; i <= 10; i++) {
  const newItem = document.createElement('li');
  newItem.textContent = 'Norbert';
  list.appendChild(newItem);
}
