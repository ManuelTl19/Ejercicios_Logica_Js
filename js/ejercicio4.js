/*
Condicionales: Crea un programa que verifique si un número es positivo,
negativo o cero, e imprima el resultado.
 */

let numero=prompt("Escribe un número: ")
numero=parseFloat(numero);

if (numero<0){
    console.log("El numero ",numero," es negativo.")
} else if(numero>0){
    console.log("El numero ", numero," es positivo." )
}else{
    console.log("El numero es 0")
}