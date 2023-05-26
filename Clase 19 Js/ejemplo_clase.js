const numero = prompt('Ingresa un numero por favor')

if (numero % 2 === 0 || numero % 3 === 0 || numero % 4 === 0) {
    if (numero % 2 === 0) {
        console.log('este numero es divisible por 2')
    } else if (numero % 3 === 0) {
        console.log('este numero es divisible por 3')
    } else if (numero % 4 === 0) {
        console.log('este numero es divisible por 4')
    }
} else{
    console.log('no se divide por ninguno')
}