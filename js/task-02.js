const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsContainer = document.querySelector('#ingredients');

const makeIngredient = ingredient => {
  const ingredientPrep = document.createElement('li');
  ingredientPrep.classList.add('item');
  ingredientPrep.textContent = ingredient;

  return ingredientPrep;
};

const ingredientsPrep = ingredients.map(ingredient => makeIngredient(ingredient));

ingredientsContainer.append(...ingredientsPrep);
