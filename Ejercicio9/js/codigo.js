
var frase = prompt("Escribe una frase corta: "); // Pedimos frase al user

// Funcion que comprueba la string pasada por parámetro
function comprobarString(frase) {
    var hayMayus = false;
    var hayMinus = false;

    // Recorremos en busqueda de los caracteres
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) == frase.charAt(i).toUpperCase()) {
            hayMayus = true;
        } else if (frase.charAt(i) == frase.charAt(i).toLowerCase()) {
            hayMinus = true;
        }
    }

    // Comprobamos los diferentes casos
    if (hayMayus && !hayMinus) {
        alert("Solo hay mayusculas");
    } else if (hayMinus && !hayMayus) {
        alert("Solo hay minusculas");
    } else if (hayMayus && hayMinus){
        alert("Hay mayusculas y minusculas");
    }
}

// Llamamos a la funcion pasandole la frase que ha introducido el user
comprobarString(frase);