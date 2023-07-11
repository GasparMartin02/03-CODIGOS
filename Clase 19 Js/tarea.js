// Aqui comienzo declarando mis variables
let personas;
let ciclo_invertido = true;

for (let i = 1; i <= 100; i++){
    // Ahora veremos di nuestro numero es perfectamente divisible por 8
    if (i % 8 === 0){
        console.log(`Invertimos el sentido`);
        ciclo_invertido = !ciclo_invertido;
    }
    // este console.log sera el indicado en mostrar las personas y su numero
    console.log(`La persona numero ${personas} dice: ${i}`) 
}
/*
let persona = 0;
let final = 100;
let sentido_horario = true;
for (let cuenta = 1; cuenta <= final; cuenta++) {
  
  //controlo los divisibles 8 y 11
  if (cuenta % 8 === 0) {
    console.log("mod 8, se invierte la ronda.")
    sentido_horario = !sentido_horario
  }
  if (cuenta % 11 === 0) {
    console.log("mod 11, salto una persona..")
    if(sentido_horario){
      persona+=1
    } else {
      persona-=1
    }
  }
  
  //controlo la cantidad de personas
  if (sentido_horario) {
    if (persona >= 10) {
      console.log("la ronda comienza nuevamente.")
      persona = 0;
    }
    persona += 1;
  } else {
    if (persona <= 1) {
      console.log("la ronda comienza nuevamente.")
      persona = 11;
    }
    persona -= 1;
  }
  
  //muestro los resultados.
  console.log(`la persona ${persona} dice ${cuenta}`)
}
console.log("fin");
*/