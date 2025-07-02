const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const header = document.querySelector('header');
const body = document.body; // Referencia al body para controlar el scroll

// Para alternar la visibilidad del sidebar y deshabilitar el scroll
menu.addEventListener('click', () => {
    sidebar.classList.toggle('menu-toggle');

    // Deshabilitar o habilitar el scroll del body dependiendo de si el sidebar está visible
    if (sidebar.classList.contains('menu-toggle')) {
        body.style.overflow = 'hidden'; // Bloquea el scroll
    } else {
        body.style.overflow = ''; // Restaura el scroll
    }
});

// Para ocultar y mostrar el header al hacer scroll
let lastScrollTop = 0;

window.onscroll = function() {
    let currentScroll = window.scrollY;

    // Si el scroll es mayor a 100px, manejar el ocultamiento del header
    if (currentScroll > 100) {
        if (currentScroll > lastScrollTop) {
            // Si el scroll es hacia abajo, ocultar el header
            header.classList.add('hidden');
        } else {
            // Si el scroll es hacia arriba, mostrar el header
            header.classList.remove('hidden');
        }
    } else {
        // Si el scroll es menor a 100px, asegurarse que el header esté visible
        header.classList.remove('hidden');
    }

    // Guardar la posición del scroll actual
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
};

// Cerrar el sidebar si se hace clic fuera de él
document.addEventListener('click', (e) => {
    // Verifica si el clic fue fuera del sidebar y el botón de menú
    if (!sidebar.contains(e.target) && !menu.contains(e.target)) {
        sidebar.classList.remove('menu-toggle'); // Cierra el sidebar
        body.style.overflow = ''; // Restaura el scroll
    }
});
