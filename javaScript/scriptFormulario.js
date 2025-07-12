const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const cont = document.getElementById('toast'); //PARA LA CREACIÓN DE TOASTS


sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
})

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
})

//CREACIÓN DE TOASTS
/*document.getElementById('nuevo').addEventListener('click', () => {
    crearToast('Inicio de Sesion Exitoso');
});*/

function crearToast(msg) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<span>${msg}</span>  <button type = "button">x</button>`;
    cont.appendChild(t);
    t.querySelector('button').onclick = () => cerrar(t);
    setTimeout(() => cerrar(t), 4000);
}
function cerrar(el) {
    el.classList.add('hide');
    el.addEventListener('animationend', () => el.remove());
}



const usuariosValidos = [
    { usuario: "criss", contraseña: "1234" },
    { usuario: "jufer_07", contraseña: "jufer07" },
    { usuario: "admin", contraseña: "admin" }
];

// Validación de inicio de sesión
document.querySelector('.sign-in-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const usuario = this.querySelector('input[type="text"]').value.trim();
    const contraseña = this.querySelector('input[type="password"]').value.trim();

    // Verificación de que las credenciales sean correctas
    if (!usuario || !contraseña) {
        alert('Por favor, completa todos los campos para iniciar sesión.');
    } else {
        const usuarioValido = usuariosValidos.find(u => u.usuario === usuario && u.contraseña === contraseña);

        if (usuarioValido) {
            crearToast(`¡Bienvenido, ${usuario}!`);
            localStorage.setItem('usuarioLogueado', usuario); // Guarda el usuario logueado
            setTimeout(() => {
                const destino = localStorage.getItem('urlDestino');
                if (destino) {
                    window.location.href = destino;
                    localStorage.removeItem('urlDestino');
                } else {
                    window.location.href = "/index.html";
                }
            }, 1000);
            
        } else {
            alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        }
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
