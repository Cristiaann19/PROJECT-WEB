//Metodo para el carrusel dinamico de las paginas internas
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const totalSlides = slideElements.length;
const dotsContainer = document.querySelector('.carousel-dots');
let index = 0;