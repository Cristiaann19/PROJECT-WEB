const menuBtn = document.querySelector('.menu');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    // Alterna la visibilidad del sidebar
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
});

// Opcional: cerrar el sidebar al hacer clic fuera de él
document.addEventListener('click', (e) => {
    if (
        sidebar.style.display === 'block' &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sidebar.style.display = 'none';
    }
});

window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.display = 'none';
    } else {
        header.style.display = 'block';
    }
};
