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
const form = document.getElementById("registration-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", function(event) {
    if (password.value !== confirmPassword.value) {
        passwordError.style.display = "block";
            event.preventDefault();
    } else {
        passwordError.style.display = "none";
    }
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


