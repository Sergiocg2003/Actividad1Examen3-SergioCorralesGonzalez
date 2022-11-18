const niveldefecto = 1
const puntuaciondefecto = 1

/**
 * Clase Jugador
 */
class Jugador{
    /**
     * 
     * @param {string} nombre 
     * @param {string} apellidos
     * @param {number} nivel
     * @param {number} puntuacion
     */
    constructor(nombre, apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nivel = niveldefecto;
        this.puntuacion = puntuaciondefecto;
    }

    /**
     * -Funcion que elimina zombie
     * @property {function}
     */
    eliminarZombie(){
        this.puntuacion = this.puntuacion + 1
        if(this.puntuacion == 10){
            this.nivel = this.nivel + 1
            this.puntuacion = 0
        }
    }

    /**
     * -Funcion que hace que el jugador sea golpeado
     * @property {function}
     */
    jugadorAlcanzado(){
        this.puntuacion = this.puntuacion - 1
        if(this.puntuacion == 0){
            this.nivel = this.nivel - 1
            if(this.nivel == 1 && this.puntuacion == 0){
                this.nivel = niveldefecto
                this.puntuacion = puntuaciondefecto
            }
        }
    }

    /**
     * -Funcion que hace que un jugador se resetee
     * @property {function}
     */
    eliminado(){
        this.nivel = niveldefecto
        this.puntuacion = puntuaciondefecto
        document.getElementById("eliminado").innerHTML = `El/La jugador/a ${this.nombre} ha sido reseteado`
    }
}

let jugador1 = new Jugador("Juan", "Benitez Perez")
let jugador2 = new Jugador("Lucia", "Sanchez Garcia")
let Jugadores = [jugador1, jugador2]
console.log(jugador1.puntuacion)
jugador1.eliminarZombie()
jugador1.eliminarZombie()
jugador1.eliminarZombie()
jugador1.eliminarZombie()
jugador1.eliminarZombie()
jugador1.eliminarZombie()
jugador1.eliminarZombie()
jugador1.eliminarZombie()
jugador1.eliminarZombie()
jugador1.eliminarZombie()
console.log(jugador1.nivel)
console.log(jugador1.puntuacion)
jugador2.eliminado()