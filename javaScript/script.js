const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');


menu.addEventListener('click',()=>{
    sidebar.classList.toggle('menu-toggle');
});

//Para ocultar el header al hacer scroll
window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
};