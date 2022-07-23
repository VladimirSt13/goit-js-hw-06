const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const titleItem = item.querySelector('h2');
  console.log(`Category: ${titleItem.textContent}`);

  const listItem = item.querySelector('ul');
  const itemsListOfItem = listItem.querySelectorAll('li');
  console.log(`Elements: ${itemsListOfItem.length}`);
});
