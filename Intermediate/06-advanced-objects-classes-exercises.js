/*
Clase 3 - Objetos y Clases avanzadas (12/02/2025)
Vídeo: https://www.twitch.tv/videos/2379412787?t=00h21m33s
*/

// 1. Agregar una función al prototipo de un objeto
function Persona(nombre) {
    this.nombre = nombre;
}

Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`);
};

const persona1 = new Persona("Juan");
persona1.saludar();

// 2. Crear un objeto que herede de otro
const animal = {
    hacerSonido: function() {
        console.log("Sonido genérico de animal");
    }
};

const perro = Object.create(animal);
perro.hacerSonido();

// 3. Definir un método de instancia en un objeto
const coche = {
    marca: "Toyota",
    encender: function() {
        console.log(`${this.marca} está encendido.`);
    }
};

coche.encender();

// 4. Uso de get y set en un objeto
class Usuario {
    #edad; // Propiedad privada

    constructor(edad) {
        this.#edad = edad;
    }

    get edad() {
        return this.#edad;
    }

    set edad(nuevaEdad) {
        if (nuevaEdad > 0) {
            this.#edad = nuevaEdad;
        } else {
            console.error("La edad debe ser un número positivo");
        }
    }
}

const usuario = new Usuario(25);
console.log(usuario.edad); // 25
usuario.edad = 30; // Asignando un nuevo valor
console.log(usuario.edad); // 30
usuario.edad = -5; // Error


// 5. Utilizar Object.assign() en un objeto
const objetoA = { a: 1, b: 2 };
const objetoB = { c: 3, d: 4 };
const objetoC = Object.assign({}, objetoA, objetoB);
console.log(objetoC);

// 6. Crear una clase abstracta
class Figura {
    constructor() {
        if (new.target === Figura) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
    }

    calcularArea() {
        throw new Error("Método abstracto, debe ser implementado");
    }
}

class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio ** 2;
    }
}

const circulo = new Circulo(5);
console.log(circulo.calcularArea());

// 7. Utilizar polimorfismo en dos clases diferentes
class Animal {
    hacerSonido() {
        console.log("Sonido genérico");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("Guau Guau!");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("Miau Miau!");
    }
}

const animales = [new Perro(), new Gato(), new Animal()];
animales.forEach(animal => animal.hacerSonido());

// 8. Implementar un Mixin
const Volador = {
    volar() {
        console.log(`${this.nombre} está volando!`);
    }
};

class Superheroe {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

Object.assign(Superheroe.prototype, Volador);

const superman = new Superheroe("Superman");
superman.volar();

// 9. Crear un Singleton
const Singleton = (function() {
    let instancia;

    function crearInstancia() {
        return { mensaje: "Soy la única instancia" };
    }

    return {
        obtenerInstancia: function() {
            if (!instancia) {
                instancia = crearInstancia();
            }
            return instancia;
        }
    };
})();

const instancia1 = Singleton.obtenerInstancia();
const instancia2 = Singleton.obtenerInstancia();
console.log(instancia1 === instancia2);

// 10. Desarrollar un Proxy
const persona = {
    nombre: "Carlos",
    edad: 30
};

const handler = {
    get(obj, prop) {
        return prop in obj ? obj[prop] : "Propiedad no encontrada";
    },
    set(obj, prop, valor) {
        if (prop === "edad" && valor < 0) {
            console.log("Edad no puede ser negativa");
        } else {
            obj[prop] = valor;
        }
    }
};

const personaProxy = new Proxy(persona, handler);

console.log(personaProxy.nombre);
console.log(personaProxy.altura);
personaProxy.edad = -5;
personaProxy.edad = 35;
console.log(personaProxy.edad);
