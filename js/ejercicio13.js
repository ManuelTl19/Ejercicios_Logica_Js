/**
 * Número par o impar: Escribe un programa que pida un número al
 * usuario y diga si es para o impar
 */

let numero=parseFloat(prompt("Escribe un número: "));

if (numero%2==0){
    console.log("El número " + numero+ " es par");
}else{
    console.log("El número " + numero+ " es impar");
}
