const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const header = document.querySelector('header');
const body = document.body;

menu.addEventListener('click', () => {
    sidebar.classList.toggle('menu-toggle');

    if (sidebar.classList.contains('menu-toggle')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

let lastScrollTop = 0;

window.onscroll = function() {
    let currentScroll = window.scrollY;

    if (currentScroll > 100) {
        if (currentScroll > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
    } else {
        header.classList.remove('hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
};

// Cerrar el sidebar si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menu.contains(e.target)) {
        sidebar.classList.remove('menu-toggle');
        body.style.overflow = '';
    }
});
