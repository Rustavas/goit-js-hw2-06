const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElements = document.querySelector('#ingredients');
const liElArray = ingredients.map(ingredient => {
const liEl = document.createElement('li');
liEl.textContent = ingredient;
liEl.classList.add('item');
return liEl;
});
listElements.append(...liElArray);
