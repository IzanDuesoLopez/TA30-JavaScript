var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
             'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Pedimos DNI y la letra al usuario
var numdni = prompt("Introduce num del DNI: ");
var letrausuario = prompt("Introduce letra del DNI: ");
var letradni;
var resultado;
// Si el DNI no es valido
if(numdni < 0 || numdni > 99999999){
    alert("¡El número proporcionado no es válido!");
    // Si lo es
} else {
    resultado = numdni % 23;
    letradni = letras[resultado];

    // Si la letra es valida
    if(letrausuario === letradni){
        alert("El número de DNI y la letra son correctos.");
    } else {
        alert("Número de DNI y letra incorrectos.");
    }
}

