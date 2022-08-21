const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const navRev = document.querySelector('#ingredients');

const makeIngredients = ingredients.map(ingredient => {
  const navItemRev = document.createElement('li');
        navItemRev.textContent = ingredient;
        navItemRev.classList.add('item');
  return navItemRev;
})

console.log(makeIngredients);

navRev.append(...makeIngredients);





// const makeIngredients = (ingredients) => {
//   const navItemRev = document.createElement('li');
//   navItemRev.textContent = ingredients;
//   navItemRev.classList.add('item');
//   return navItemRev;
// }
// console.log(makeIngredients);
// const ingredient = ingredients.map(makeIngredients);


// navRev.append(ingredient); 