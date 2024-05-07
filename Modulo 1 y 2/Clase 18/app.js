const nombre = 'Gaspar';
const saludo = 'Hola, mi nombre es';

console.log(saludo + '' + nombre);
console.log(`${saludo} ${nombre}, y estudio programacion`);

// -------------- //

const num1 = parseFloat(prompt('Ingresa el primer numero'));
const num2 = parseFloat(prompt('Ingresa el segundo numero'));

if (!isNaN(num1) || !isNaN(num2)) {
    console.log('No se puede ingresar letras sino numeros');
} else{
    console.log('se ejecuta la comparacion');
}