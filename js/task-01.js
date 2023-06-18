const ulCategories = document.querySelectorAll('.item'); 
console.log('Number of categories:', ulCategories.length)

ulCategories.forEach(element =>{ 
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.querySelectorAll('li').length}`)
});

// const categories = document.querySelector('#categories');
// console.log(`Number of categories: ${categories.children.length}`);