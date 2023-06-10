// Aqui comienzo declarando mis variables
let personas = 1;

for (let i = 1; i < 100; i++){
    if (personas > 10){  // este if es el que reiniciara el numero de personas ya que tenian solo que ser 10
        personas = 1;
    }
    console.log(`La persona numero ${personas} dice: ${i}`) // este console.log sera el indicado en mostrar las personas y su numero
    personas++;
}

