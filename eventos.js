
const divAlert = document.getElementById("divAlert");
const saludo = document.getElementById("hola");

// Manejador de eventos (Event handler para los que saben ingles)

    divAlert.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });
// Arreglo a las alertas saltando a la vez.
    saludo.addEventListener("click", function(event) {
        event.stopPropagation();
    })
