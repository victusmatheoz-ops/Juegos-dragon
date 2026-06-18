//console.error("Tonto te equivocaste");
//console.warn("Casi la cag...");

console.log("Suscribete sin load");

document.addEventListener('DOMContentLoaded', function(){
    console.log("Suscribete con load");
    console.log("Inicia juego");

    // Iniciar el bucle pasándole un tiempo inicial (si existe)
    if (typeof bucleinfinito !== 'undefined' && bucleinfinito && typeof bucleinfinito.bucle === 'function') {
        bucleinfinito.bucle(performance.now());
    } else {
        console.warn('No se encontró `bucleinfinito`. Asegúrate de cargar `IMG/bucle.js` antes en el HTML.');
    }
});
