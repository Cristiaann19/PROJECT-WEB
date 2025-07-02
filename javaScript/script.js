const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');


menu.addEventListener('click',()=>{
    sidebar.classList.toggle('menu-toggle');
});

//Para ocultar el header al hacer scroll
let lastScrollTop = 0;

window.onscroll = function() {
    var header = document.querySelector('header');
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
