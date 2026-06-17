console.log("Hola novato");
console.error("Esto es un error");
console.warn("Esto es una advertencia");

function mostrarAlerta() {
    alert("Hola desde JavaScript en el HTML");
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Suscribete sin load");
});