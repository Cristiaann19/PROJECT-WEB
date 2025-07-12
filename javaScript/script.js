const menuBtn = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const toggleBtnIcon = menuBtn.querySelector('i');


menuBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('menu-toggle');
});

window.onscroll = function() {
    var header = document.querySelector('header');
    var sidebar = document.querySelector('.sidebar');
    if (window.scrollY > 100) {
        header.style.display = 'none';
        sidebar.style.display = 'none';
    } else {
        header.style.display = 'block';
        sidebar.style.display = 'block';
    }
};

//PARA QUE CAMBIE DE ICONO AL ABRIR EL SIDEBAR
menuBtn.onclick = function () {
    sidebar.classList.toggle('open');
    const isOpen = sidebar.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};

window.addEventListener('DOMContentLoaded', function() {
    const userBtn = document.getElementById('user-btn');
    const userIcon = document.getElementById('user-icon');
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');

    if (usuarioLogueado) {
        // Si está logueado, muestra el icono de salir y permite cerrar sesión
        userIcon.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i>';
        userBtn.href = "#";
        userBtn.title = "Cerrar sesión";
        userBtn.onclick = function(e) {
            e.preventDefault();
            localStorage.removeItem('usuarioLogueado');
            location.reload();
        }
    } else {
        // Si no está logueado, muestra el icono de usuario y va al login
        userIcon.innerHTML = '<i class="fa-solid fa-user"></i>';
        userBtn.href = "/html/Formulario.html";
        userBtn.title = "Iniciar sesión";
        userBtn.onclick = null;
    }
});

