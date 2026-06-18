var bucleinfinito = {
    id: null,
    fin: 0,
    aps: 0,
    fps: 0,
    bucle: function(tiempo) {
        bucleinfinito.id = window.requestAnimationFrame(bucleinfinito.bucle);
        if (!tiempo) {
            tiempo = performance.now();
        }
        var diferencia = tiempo - bucleinfinito.fin;

        if (diferencia >= 999) {
            console.log(`fin=${bucleinfinito.fin} tiempo=${tiempo} diferencia=${diferencia}`);
            bucleinfinito.fin = tiempo;
        }
    }

};