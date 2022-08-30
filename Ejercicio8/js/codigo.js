// Pedimos al usuario que introduzca un número entero
var num = prompt("Introduce un número entero: ");

// Funcion que comprueba si el número es par o impar
function numeroParOImpar(num){
    var resultado = num % 2;
    if(resultado == 0){
        return "El número es par!";
    } else {
        return "El número es impar!";
    }
}

// Llamamos a la funcion
alert(numeroParOImpar(num));