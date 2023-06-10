/*
1) Repasar como definir un objeto de persona, con las propiedades 
nombre, edad, dni, domicilio, hijos (ctd), profesion.

2) Cómo trasladar este formato a un array de objetos.

3) Recorrer y mostrar por consola los distintos elementos del array 
(mostrando propiedad por propiedad de cada elemento).*/

var Persona = {
    Nombre: 'Mariano',
    Edad: 27,
    DNI: 38087599,
    Domicilio: 'Lomas de Tafi',
    Hijos: 5,
    Profesion:'Carpintero'
}

let Personas = [Persona.Nombre,Persona.DNI,Persona.Domicilio,Persona.Edad,Persona.Hijos,Persona.Profesion];

console.log(Personas);