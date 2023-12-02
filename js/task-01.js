'use strict'
const categories = document.querySelector("#categories");
const items = categories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

const itemsList = items.forEach(element => {
    const title = element.firstElementChild.textContent;
    const quantity = element.lastElementChild.querySelectorAll('li').length;
    console.log(`Category: ${title}
Elements: ${quantity}`);
});
