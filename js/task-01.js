const itemsRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsRef.length}`);

itemsRef.forEach(item => {
  const titleItemRef = item.querySelector('h2'); //firstElementChild
  console.log(`Category: ${titleItemRef.textContent}`);

  const listItemRef = item.querySelector('ul'); //lastElementChild
  const itemsListOfItemRef = listItemRef.querySelectorAll('li');
  console.log(`Elements: ${itemsListOfItemRef.length}`);
});
