class NewPokemon {
  constructor(
    public readonly id: number,
    public name: string,
  ){}
  scream() {
    console.log(`No quiero gritar`)
  }
  speak() {
    console.log(`No quiero hablar`)
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    // console.log('MyDecorator', target)
    return NewPokemon
  }
}

@MyDecorator()
export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
  ){}
  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }
  speak() {
    console.log(`${this.name}, ${this.name}!`)
  }

}

export const charmander = new Pokemon(4, 'Charmander')
charmander.scream()
charmander.speak()

// Los decoradores en TypeScript son una característica que permite modificar el comportamiento de clases, métodos, propiedades o parámetros. Son funciones especiales que se aplican a una declaración para añadirle metadatos o alterar su comportamiento de alguna manera.

// En el código proporcionado, se utiliza un decorador llamado MyDecorator para modificar la clase Pokemon. Aquí está el decorador y su aplicación:

// El decorador MyDecorator es una función que retorna otra función. La función retornada toma como argumento la clase objetivo (target) y la reemplaza con la clase NewPokemon. Esto significa que cuando se crea una instancia de Pokemon, en realidad se está creando una instancia de NewPokemon.

// Aquí está la clase NewPokemon:

// Cuando se aplica el decorador @MyDecorator() a la clase Pokemon, cualquier instancia de Pokemon utilizará los métodos de NewPokemon en lugar de los definidos en Pokemon. Por lo tanto, al ejecutar el siguiente código:

// Se obtendrán los resultados de los métodos scream y speak de NewPokemon:

// En resumen, los decoradores permiten modificar o extender el comportamiento de las clases y sus miembros de manera declarativa y reutilizable. Son una característica poderosa de TypeScript que puede utilizarse para implementar patrones de diseño y mejorar la legibilidad y mantenibilidad del código.