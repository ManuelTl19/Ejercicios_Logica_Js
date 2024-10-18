/**
 * Palíndromos: Pide al usuario ingresar una palabra y determina si es un
palíndromo (se lee igual al derecho y al revés).
 */

let palabra= prompt("Inserta ua palabra: ");

palabra=palabra.replace(/\s/g, '').toLowerCase();
let palabrainvertida;
palabrainvertida=palabra.split("").reverse().join("")

if (palabra===palabrainvertida){
    console.log("La palabra proporcionada si es un palindromo.")
}else{
    consoosole.log("la palabra proporcionada no es un Palindromo. ")
}
