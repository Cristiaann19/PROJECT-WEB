/**
 * 
 * 
 * function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
// Función para mostrar/ocultar el formulario de inicio de sesión
function toggleLoginForm() {
    const loginForm = document.getElementById('login-form');
    loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
  }
  
  // Función para simular el inicio de sesión
  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      alert('Inicio de sesión exitoso');
      document.getElementById('login-form').style.display = 'none';
    } else {
      alert('Por favor, complete ambos campos.');
    }
  }
 */


/**
 function register(){
    const correo = document.getElementById('correo').value;

    if(correo){
        alert('Registro exitoso. Se han enviado las instrucciones a su dirección de correo electrónico')
        document.getElementById('sign-form').style.display = 'none';
    }else{
        alert('Por favor, complete el campo.')
    }

  }  
 */

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


    