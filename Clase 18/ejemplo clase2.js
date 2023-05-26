const CTD_PERSONAS= 10;
const LIMITE_CUENTA= 20;
const LIMITE_PERSONAS= 10;

let cuenta;
let persona = 0;
let sentido_horario = true;

for(cuenta = 1;cuenta <= LIMITE_CUENTA;cuenta ++){
    
    if (sentido_horario === true) {
        if(persona === LIMITE_PERSONAS) {
            persona = 1;
        } else {
            persona = persona + 1;
        }
    } else {
        if (persona === 1) {
            persona = LIMITE_PERSONAS;
        } else {
            persona = persona - 1;
        }
    }

    if (cuenta % 8 == 0) {
        sentido_horario = !sentido_horario;
    }

    console.log(`persona ${persona} dice ${cuenta}`);
}

console.log('cuenta terminada')