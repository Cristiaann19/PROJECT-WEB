//Menu HAMBUERGUESA RESPONSIVE
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = toggleBtn.querySelector('i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
});



// Función para aplicar el modo oscuro si estaba activado
document.addEventListener("DOMContentLoaded", function () {
    const modoOscuroActivado = localStorage.getItem("modoOscuro") === "true";

    if (modoOscuroActivado) {
        document.body.classList.add("modo-oscuro");

        // Cambiar el ícono también si ya estaba activado
        const icono = document.querySelector("#modo-oscuro-btn i");
        if (icono) {
            icono.classList.remove("fa-moon");
            icono.classList.add("fa-sun");
        }
    }
});

// Evento del botón
document.getElementById("modo-oscuro-btn").addEventListener("click", function () {
    const modoOscuroActivo = document.body.classList.toggle("modo-oscuro");

    // Guardar el estado en localStorage
    localStorage.setItem("modoOscuro", modoOscuroActivo);

    // Cambiar íconos
    const icono = this.querySelector("i");
    icono.classList.toggle("fa-moon");
    icono.classList.toggle("fa-sun");
});


/*FUNCIONES DEL MODAL*/
// Selecciona imágenes dentro de todas las clases de juegos
document.querySelectorAll(
  '.juegoS .imagen-con-descripcion img, ' +
  '.juegoA .imagen-con-descripcion img, ' +
  '.juegoAvtr .imagen-con-descripcion img, ' +
  '.juegoL .imagen-con-descripcion img, ' +
  '.juegoD .imagen-con-descripcion img'
).forEach((img) => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', function() {
    const title = img.alt;
    const imageSrc = img.src;
    const description = img.parentElement.querySelector('.descripcion').textContent;

    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal-description').textContent = description;

    document.getElementById('modal').style.display = 'flex';
  });
});

// Cierra el modal al hacer clic en la X
document.querySelector('.close-btn').onclick = function() {
  document.getElementById('modal').style.display = 'none';
};

// Cierra el modal al hacer clic fuera del contenido
document.getElementById('modal').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};


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

//VERIFIACADOR DE CONTRASEÑAS
const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input=document.getElementById('email-input')
const password_input=document.getElementById('password-input')
const repeat_password_input=document.getElementById('repeat-password-input')
const error_message=document.getElementById('error-message')

form.addEventListener('submit',(e)=>{
    //e.preventDefault()
    let errors = []
    if(firstname_input){
        errors =getSignupFormErrors(firstname_input.value,email_input.value,password_input.value,repeat_password_input.value)
    }else {
        errors =getLoginFormsErrors(email_input.value,password_input.value)
    }
    if (errors.length > 0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})
function getSignupFormErrors(firstname,email,password,repeatPassword){
    let errors = []
    if (firstname === '' || firstname == null){
        errors.push('El nombre es requerido')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if (email === '' || email == null){
        errors.push('El email es requerido')
        email_input.parentElement.classList.add('incorrect')
    }
    if (password === '' || password == null){
        errors.push('La contraseña es requerida')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password.length<8){
        errors.push('La contraseña debe tener más de 8 caracteres')
    }
    if (password !== repeatPassword) {
        errors.push('Las contraseñas no coinciden')
        password_input.parentElement.classList.add('incorrect')
        repeat_password_input.parentElement.classList.add('incorrect')
    }
    return errors;
}
const allInputs = [firstname_input,email_input,password_input,repeat_password_input]
allInputs.forEach(input =>{
    input.addEventListener('input',()=>{
        if (input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
        }
    })
})
function getLoginFormsErrors(email,password){
    let errors = []
    if (email === '' || email == null){
        errors.push('El email es requerido')
        email_input.parentElement.classList.add('incorrect')
    }
    if (password === '' || password == null){
        errors.push('La contraseña es requerida')
        password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}
