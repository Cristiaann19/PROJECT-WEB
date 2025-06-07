//FUNCION DEL NAVBAR- MENU_HANBURGERSA//
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
//2 FUNCIONES PARA REPRODUCIR MUSICA
function reproducirMusica() {
    const music = document.getElementById("musica");
    const musicIcon = document.querySelector("#music-btn i");
    if (music.paused) {
        music.play();
        musicIcon.classList.remove("fa-music");
        musicIcon.classList.add("fa-pause");
    } else {
        music.pause();
        musicIcon.classList.remove("fa-pause");
        musicIcon.classList.add("fa-music");
    }
}

function ReproMusica() {
    const music = document.getElementById("Mmusica");
    const musicIcon = document.querySelector("#BotonMusica i");

    if (music.paused) {
        music.play();
        musicIcon.classList.remove("fa-music");
        musicIcon.classList.add("fa-pause");
    } else {
        music.pause();
        musicIcon.classList.remove("fa-pause");
        musicIcon.classList.add("fa-music");
    }
}


//FUNCIONES PARA EL MODO OSCURO
//funcion 1 pantalla grande
const toggle = document.getElementById('toggle');
const icon = document.getElementById('icon');
const body = document.body;
const h3Elements = document.querySelectorAll('h3');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.links li a');

function enableDarkMode() {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('darkMode', 'enabled');
    h3Elements.forEach(h3 => h3.classList.add('dark-mode'));
    header.classList.add('dark-mode');
    navLinks.forEach(a => a.classList.add('dark-mode'));
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('darkMode', 'disabled');
    h3Elements.forEach(h3 => h3.classList.remove('dark-mode'));
    header.classList.remove('dark-mode');
    navLinks.forEach(a => a.classList.remove('dark-mode'));
}

if (localStorage.getItem('darkMode') === 'enabled') {
    toggle.checked = true;
    enableDarkMode();
}

toggle.addEventListener('change', function () {
    if (this.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

//funcion 2

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const icon = document.getElementById('icon2');
    const body = document.body;
    const h3Elements = document.querySelectorAll('h3');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.links li a');

    function enableDarkMode() {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'enabled');
        h3Elements.forEach(h3 => h3.classList.add('dark-mode'));
        header.classList.add('dark-mode');
        navLinks.forEach(a => a.classList.add('dark-mode'));
    }
});

function disableDarkMode() {
    body.classList.remove('dark-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('darkMode', 'disabled');
    h3Elements.forEach(h3 => h3.classList.remove('dark-mode'));
    header.classList.remove('dark-mode');
    navLinks.forEach(a => a.classList.remove('dark-mode'));
}

if (localStorage.getItem('darkMode') === 'enabled') {
    toggle.checked = true;
    enableDarkMode();
}

toggle.addEventListener('change', function () {
    if (this.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

//CAMBIO DE ICONO AL PRESIONAR
//funcion 1
const toggleCheckbox = document.getElementById('toggle');

toggleCheckbox.addEventListener('change', function () {
    if (this.checked) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

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
