class Pokemon {
    constructor(nombre, vidas) {
        this.nombre = nombre
        this.vidas = vidas
        this.nivel = 1
    }

    saludar() {
        console.log(`Hola, el pokemon ${this.nombre} esta saludando`)
    }

}

class PokemonElectrico extends Pokemon {
    constructor(nombre, vidas, dañoImpactrueno) {
        super(nombre,  vidas); //Clase padre o superclase
        this.dañoImpactrueno = dañoImpactrueno
    }
    
    impactrueno() {
        console.log(`El pokemon ${this.nombre} lanzo impactrueno con un daño de ${this.dañoImpactrueno}`)
    }

}

class PokemonFuego extends Pokemon {
    constructor(nombre,  vidas, dañoLlamarada) {
        super(nombre, vidas); //Clase padre o superclase
        this.dañoLlamarada = dañoLlamarada
    }
    
    llamarada() {
        console.log(`El pokemon ${this.nombre} lanzo llamarada con un daño de ${this.dañoLlamarada}`)
    }

}

const pikachu1 = new PokemonElectrico("Pika pika", 10, 5)
const charmander1 = new PokemonFuego("Fueguito", 12, 5)

console.table(pikachu1)
console.table(charmander1)
pikachu1.impactrueno()
charmander1.llamarada()