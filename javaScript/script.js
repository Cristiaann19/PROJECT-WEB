const menuBtn = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('menu-toggle');
});
// Opcional: cerrar el sidebar al hacer clic fuera de él
/* 
document.addEventListener('click', (e) => {
    if (
        sidebar.classList.toggle('menu-toggle') &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sidebar.classList.toggle('');
    }
});
*/
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
