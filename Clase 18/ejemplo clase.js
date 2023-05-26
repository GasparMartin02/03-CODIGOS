const TXT_version = 'La ultima version de bootstrap es la 5.3';
let versionBootstrap = 5.3; // lo mejor es ponerlo entre comillas '5.3.2' para que se le pueda agregar mas numeros

console.log(TXT_version)
console.log('La ultima version de bootstrap es la ' +versionBootstrap+ 'lanzada en fecha x') 
console.log(`La ultima version de bootstrap es la ${versionBootstrap} lanzada en fecha x`)

// Este es un comentario de linea simple

/*
Este es un bloque de comentario
*/

const numero1 = 5;
const numero2 = 8;

if(numero1 <= numero2) {
    console.log("numero1 no es mayor que numero2");
}

if(0 <= numero2) {
    console.log("numero2 es positivo");
}

if(numero1 < 0 || numero1 !== 0) {
    console.log("numero1 es negativo o distinto de cero");
}

if(numero1 + 1 < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

// calcular el factorial de numero 2

let factorial= 1;

for(let i=1;i <= numero2;i++){
    factorial= factorial*i;
}

console.log(factorial);

let sumatoriapares = 0;

for (let j = numero1; j <= numero2; j++) {

    if(j % 2 == 0) {
        sumatoriapares = sumatoriapares + j; 
    }

}

console.log(sumatoriapares);