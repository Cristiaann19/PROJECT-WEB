// ==================== CALIFICACIÓN DE ESTRELLAS ====================
let calificacion = 0;

function renderStars(rating) {
    const maxStars = 5;
    let html = "";
    for (let i = 1; i <= maxStars; i++) {
        html += `<span 
            style="color:${i <= rating ? 'gold' : 'gray'}; font-size:22px; cursor:pointer;" 
            onclick="setRating(${i})">&#9733;</span>`;
    }
    const starElem = document.getElementById("star-rating");
    if (starElem) starElem.innerHTML = html;
}

function setRating(valor) {
    calificacion = valor;
    renderStars(calificacion);
}

// ==================== MENSAJE CARRITO VACÍO ====================
function mostrarMensajeCarritoVacio(carrito) {
    const vacio = document.getElementById("carritoVacio");
    const mainContainer = document.querySelector(".main-container");
    if (!vacio || !mainContainer) return;

    if (carrito.length === 0) {
        vacio.style.display = "flex";
        mainContainer.style.display = "none";
    } else {
        vacio.style.display = "none";
        mainContainer.style.display = "flex";
    }
}

// ==================== MOSTRAR PRODUCTOS DEL CARRITO ====================
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const itemsContenedor = document.querySelector(".cart-items");
    if (!itemsContenedor) return;

    itemsContenedor.innerHTML = "";

    mostrarMensajeCarritoVacio(carrito);

    if (carrito.length === 0) {
        calcularTotal();
        return;
    }

    carrito.forEach((juego, index) => {
        const item = document.createElement("div");
        item.classList.add("cart-item");
        item.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.nombre}" width="80" class="imagen-juego">
            <div class="product-info">
                <span class="product-title">${juego.nombre}</span>
                <span class="product-description">${juego.descripcion}</span>
                <span class="product-price">Precio: S/. ${juego.precio.toFixed(2)}</span>
                <span class="product-cantidad">Cantidad: ${juego.cantidad}</span>
            </div>
            <div class="cart-icons">
                <span class="icon-trash" onclick="eliminarDelCarrito(${index})"><i class="fa-solid fa-trash"></i></span>
            </div>
        `;
        itemsContenedor.appendChild(item);
    });

    calcularTotal();
}

// ==================== AGREGAR AL CARRITO ====================
function addToCart(nombre, descripcion, precio, imagen) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const index = carrito.findIndex(j => j.nombre === nombre);
    if (index !== -1) {
        carrito[index].cantidad += 1;
    } else {
        const nuevoJuego = {
            nombre: nombre,
            descripcion: descripcion,
            precio: parseFloat(precio),
            imagen: imagen,
            cantidad: 1
        };
        carrito.push(nuevoJuego);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarModalCarrito();
}

// ==================== MODAL FUNCIONES ====================
function mostrarModalCarrito() {
    const modal = document.getElementById('modal-carrito');
    if (modal) {
        modal.classList.add('activo');
    }
}

// ==================== ELIMINAR PRODUCTO ====================
function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// ==================== CALCULAR TOTAL ====================
function calcularTotal() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const total = carrito.reduce((sum, juego) => sum + (juego.precio * juego.cantidad), 0);
    const totalElem = document.querySelector(".total-price");
    if (totalElem) totalElem.textContent = total.toFixed(2);
}

// ==================== INICIALIZAR AL CARGAR ====================
document.addEventListener("DOMContentLoaded", () => {
    // Modal botones (esto solo aplica para la página donde esté el modal)
    const btnVerCarrito = document.getElementById('btn-ver-carrito');
    const btnContinuar = document.getElementById('btn-continuar');
    const modalCarrito = document.getElementById('modal-carrito');
    if (btnContinuar && btnVerCarrito && modalCarrito) {
        btnContinuar.onclick = function() {
            modalCarrito.classList.remove('activo');
        };
        btnVerCarrito.onclick = function() {
            window.location.href = "/html/Carrito.html";
        };
        modalCarrito.onclick = function(e) {
            if (e.target === this) this.classList.remove('activo');
        };
    }

    // Mostrar carrito automáticamente si existe el contenedor (página de carrito)
    if (document.querySelector(".cart-box")) {
        mostrarCarrito();
    }
    // Renderizar estrellas si existe el rating
    if (document.getElementById("star-rating")) {
        renderStars(calificacion);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");

    if (!track || items.length === 0) return;

    let currentIndex = 0;
    const itemWidth = items[0].offsetWidth + 20;
    const totalItems = items.length;

    function moveCarousel() {
        if (currentIndex >= totalItems - 10) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }

        const translateX = -currentIndex * itemWidth;
        track.style.transform = `translateX(${translateX}px)`;
    }
    setInterval(moveCarousel, 2500);
});
