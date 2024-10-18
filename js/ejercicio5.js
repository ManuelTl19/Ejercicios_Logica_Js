/*
Comparaciones: Escribe un programa que compare dos números y diga cuál
es mayor o si son iguales.
 */

console.log("Este programa identifica cual numero es mayor");
let numero=parseFloat(prompt("Escribe el primer numero:  "));
let numero2=parseFloat(prompt("Escribe el segundo numero: "))

if (numero>numero2){
    console.log("El numero ", numero, " es mayor.")
}else if(numero<numero2){
    console.log("El numero", numero2, " es mayor.")
}else{
    console.log("Los numero son iguales.")
}