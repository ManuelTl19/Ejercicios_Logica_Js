/**
 * Conversion de temperaturas: crear un programa que convierta grados celcius a fahrenheit
 * 
 */

let celcius=parseFloat(prompt("Ingresa la temperatura en celcius: "));

let fahrenheit=celcius*(9/5)+32

console.log("Ingresaste la temperatura de ", celcius, "C°");
console.log("La temperatura el fahrenheit es de ", fahrenheit, "C°");