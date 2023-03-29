const categoriesList = document.getElementById('categories');
const categoriesCount = categoriesList.children.length;
console.log(`Number of categories: ${categoriesCount}`);

const categoriesItems = categoriesList.querySelectorAll('.item');
categoriesItems.forEach((item) => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryElementsCount = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}\nElements: ${categoryElementsCount}`);
});
