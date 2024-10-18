/**
 * Acceder a un array: Crea un programa que modifique el tercer valor de un
array y luego imprima el array completo.
 */

let lista=["Pantalla", "Teclado", "Refrigerador", "CPU", "mouse"];
nuevaPalabra=prompt("Palabra para cambiar: ")

console.log("Palabra que se quiere cambiar: 'refrigerador' Por la palabra: ", nuevaPalabra);

lista[2]=nuevaPalabra;

console.log(lista);