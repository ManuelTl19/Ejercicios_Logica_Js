/**
 * Validación de entrada: Pide al usuario que ingrese un número y verifica si es
realmente un número. Si no lo es, muestra un mensaje de error.
 */

let valor=parseFloat(prompt("Ingresa un valor: "));

if(!isNaN(valor)){
    console.log("Es un numero.")
} else{
    console.log("No es un numero.")
}
