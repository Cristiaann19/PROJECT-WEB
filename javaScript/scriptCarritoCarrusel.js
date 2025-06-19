//Metodo para el carrusel dinamico de las paginas internas
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const totalSlides = slideElements.length;
const dotsContainer = document.querySelector('.carousel-dots');
let index = 0;

// Crear los dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
        resetInterval();
    });
    dotsContainer.appendChild(dot);
}

function updateCarousel() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function moveToNextSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();
}

let interval = setInterval(moveToNextSlide, 3000);

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(moveToNextSlide, 3000);
}
