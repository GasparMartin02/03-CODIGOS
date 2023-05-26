let numeros = [];
let ingreso;

do {
    ingreso = prompt('Ingresar de un numero:');
    if (ingreso !== '0') numeros.push(ingreso);
} while (ingreso !== 0);

console.log('Cantidad de numeros ingresadas:');

for (let c = 0; c < numeros.length ;c++){
    numeros[c] = numeros [c] * 2;
    console.log(numeros[c]);
}