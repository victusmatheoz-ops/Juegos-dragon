const mario = document.getElementById("mario");
const bloque = document.getElementById("bloque");

let saltando = false;
let enElAire = false;
let posicion = 0;
let gravedad;

// ======================
// SALTO CORREGIDO
// ======================

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {

        // Si ya está en el aire, bloquear doble salto
        if (enElAire) {
            console.warn("Advertencia: Doble salto no permitido en este nivel");
            return;
        }

        enElAire = true;
        saltando = true;

        let salto = setInterval(() => {
            if (posicion >= 150) {
                clearInterval(salto);
                saltando = false;
                aplicarGravedad();
            } else {
                posicion += 10;
                mario.style.bottom = posicion + "px";
            }
        }, 30);
    }
});

function aplicarGravedad() {
    gravedad = setInterval(() => {
        if (posicion <= 0) {
            clearInterval(gravedad);
            posicion = 0;
            mario.style.bottom = "0px";
            enElAire = false;
        } else {
            posicion -= 10;
            mario.style.bottom = posicion + "px";
        }
    }, 30);
}

// ======================
// BLOQUE SORPRESA
// ======================

const inventario = [];

bloque.addEventListener("mouseover", () => {
    console.log("Bloque detectado");
});

bloque.addEventListener("dblclick", () => {
    bloque.style.display = "none";

    let item = {
        nombre: "Champiñón",
        poder: "Crecimiento",
        cantidad: 1
    };

    inventario.push(item);

    console.table(inventario);

    let imagen = new Image();

    imagen.onerror = () => {
        console.error("¡Fallo crítico! Imagen del Champiñón no encontrada");
    };

    imagen.src = "imagen-corrupta.png";
});