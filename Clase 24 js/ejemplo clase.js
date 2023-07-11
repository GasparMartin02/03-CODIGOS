// Primera declaracion de clases
class Deportista {
    constructor(nombre, peso, estatura, edad) {
        if (typeof(nombre) === 'undefined' || typeof(peso) === 'undefined' || typeof(estatura) === 'undefined' || typeof(edad) === 'undefined'){
            throw new Error ('Faltan Parametros Obligatorios');
        }

        this.codigo = this.generar_id_automatico();
        this.nombre = nombre;
        this.peso = peso;
        this.estatura = estatura;
        this.edad = edad;
    }

    // Metodo normal
    generar_id_automatico(){
        return 'ABC123';
    }
    
    cargar_registro() {
    }

    imprimir_dato() {
        console.log(`${this.nombre}, ${this.peso}, ${this.estatura}, ${this.edad}`)
    }
}

// Creamos una nueva instancia de tipo Deportista
const deportista_01 = new Deportista(`Tito`, 22, 22, 22);

deportista_01.imprimir_dato();
