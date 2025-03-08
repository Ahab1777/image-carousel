import ImageCarousel from "./image-carousel.js";

//create array of image paths from /img folder
const imagePaths = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg'
];

const container = document.getElementById('main-container');

const carousel = new ImageCarousel(imagePaths, 0, '100%', '100%');
carousel.renderCarousel('main-container');