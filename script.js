//FUNCIONES DE LA PAG. LOGIN
const container = document.querySelector(".container-login");
const btnSignIn = document.getElementById("btn-sign-in")
const btnSignUp = document.getElementById("btn-sign-up")

btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle")
});
btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle")
});

//Boton de reproducir musica
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
//MODO OSCURO
function ModeDark(){

}