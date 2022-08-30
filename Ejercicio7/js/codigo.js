var num = prompt("Introduce un número entero: "); // Pedimos al usuario que introduzca un n´´umero entero

var resultado = 1; // Inicializamos el resultado en 1 para poder operar
for(let i = 1; i <= num; i++){ // bucle FOR para multiplicar
    resultado *= i; // El resultado sera igual al resultado multiplicado por el indice del bucle
}

alert("El resultado es: " + resultado); // Mostramos mediante una alerta el resultado al usuario