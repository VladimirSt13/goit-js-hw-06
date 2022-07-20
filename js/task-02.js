const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsContainerRef = document.querySelector('#ingredients');

const makeIngredient = ingredient => {
  const ingredientRef = document.createElement('li');
  ingredientRef.classList.add('item');
  ingredientRef.textContent = ingredient;

  return ingredientRef;
};

const ingredientsRef = ingredients.map(ingredient => makeIngredient(ingredient));

ingredientsContainerRef.append(...ingredientsRef);
