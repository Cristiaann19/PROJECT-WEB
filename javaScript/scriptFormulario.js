const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
})

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
})

//VALIDACIÓN DE INICIO DE SESIÓN
document.querySelector('.sign-in-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const usuario = this.querySelector('input[type="text"]').value.trim();
    const contraseña = this.querySelector('input[type="password"]').value.trim();

    if (!usuario || !contraseña) {
        alert('Por favor, completa todos los campos para iniciar sesión.');
    } else {
        alert(`¡Bienvenido! Inicio sesión exitoso`);
        window.location.href = "/index.html";
    }
});

//VALIDACIÓN DE REGISTRO
document.querySelector('.sign-up-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = this.querySelector('input[placeholder="Nombre de usuario"]').value.trim();
    const email = this.querySelector('input[placeholder="Correo electrónico"]').value.trim();
    const password = this.querySelector('input[placeholder="Contraseña"]').value.trim();

    if (!username || !email || !password) {
        alert('Por favor, completa todos los campos para registrarte.');
    } else if (!email.includes('@')) {
        alert('El correo electrónico ingresado no es válido. Debe contener "@"');
    } else {
        alert(`¡Gracias por registrarte, ${username}!`);
        window.location.href = "/index.html";
    }
});
