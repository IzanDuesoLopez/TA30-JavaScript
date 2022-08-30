var frase = prompt("Introduce una frase: "); // Pedimos frase al user

function comprobarFrase(frase){
    var fraseSinEspacios = frase.replace(/[\W_]/g, "").toUpperCase(); // Eliminamos los espacios de la frase, y la guardamos en una nueva VAR
    var frasePalindromo = fraseSinEspacios.split("").reverse().join(""); // Damos la vuelta a la frase

    // Comprobamos si las frases coinciden
    if(frasePalindromo === fraseSinEspacios){
        alert("La frase es palindromo");
    // SI no, mostramos que no es palindromo
    } else {
        alert("La frase NO es palindromo");
    }
}

comprobarFrase(frase);