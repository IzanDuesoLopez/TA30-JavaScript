var valores = [true, 5, false, "hola", "adios", 2]; // Array con datos

var mayor = 0; // Variable en la que guardaremos la String mas larga

// Recorremos el array
for(let i = 0; i < valores.length; i++){
    if(mayor == 0){
        // La primera String que encontremos sera la mayor
        if(typeof valores[i] == "string"){
            mayor = valores[i];
        }
    } else {
        // Comprobamos las siguientes string con la string almacenada anteriormente
        if(typeof valores[i] == "string"){
            if(valores[i].length > mayor.length){
                mayor = valores[i];
            }
        }
    }
}
// Mostramos por consola la string resultante
console.log(mayor);

// Recorremos para comprobar los valores booleanos
for(let i = 0; i < valores.length; i++){
    if(typeof valores[i] == "boolean"){
        // Si es true
        if(valores[i]){
            console.log("True!");
        // Si es false
        } else {
            console.log("False!");
        }
    }
}

// Recorremos una última vez para realizar las operaciones matemáticas
var a;
var b;
var condicion = true;
for(let i = 0; i < valores.length; i++){
    if(condicion){
        if(typeof valores[i] == "number"){
            // Guardamos el valor del primer número
            a = valores[i];
            condicion = false;
        }
    } else {
        if(typeof valores[i] == "number"){
            // Guardamos el valor del segundo numero
            b = valores[i];
        }
    }
}

var suma = a + b;
var resta = a - b;
var multiplicacion = a * b;
var division = a / b;
var modulo = a % b;

console.log("A: " + a + " B: " + b);
console.log("Suma: " + suma + " Resta: " + resta + " Multiplicación: " + 
            multiplicacion + " Division: " + division + " Modulo: " +  modulo);