`use strict`
const images = document.querySelector('.gallery');
const imgArray = [
    '<li> <img class="img" src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260" alt = "White and Black Long Fur Cat" /></li > ',
    '<li><img class="img" src = "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260" alt = "Orange and White Koi Fish Near Yellow Koi Fish" /></li>',
    '<li><img class="img" src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260" alt = "Group of Horses Running" /></li>'
].join('');
images.innerHTML = imgArray;

