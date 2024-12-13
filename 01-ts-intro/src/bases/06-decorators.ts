const Deprecated = (deprecationReason: string) => {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args); 
        }
        return wrapperFn;
      }
    }
  }   
}

export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
  ){}
  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }
  @Deprecated('Most use speak2 method instead')
  speak() {
    console.log(`${this.name}, ${this.name}!`)
  }
  @Deprecated('Most use speak3 method instead')
  speak2(){
    console.log('Nuevo método speak2, que reemplaza a speak')
  }
  speak3(){
    console.log('Nuevo método speak3')
  }

}

export const charmander = new Pokemon(4, 'Charmander')
charmander.speak2()

// El concepto de "Deprecated" se refiere a una característica, método o función que se considera obsoleta y que no se recomienda su uso en el futuro. Aunque todavía puede funcionar, se sugiere que los desarrolladores eviten usarla y, en su lugar, utilicen una alternativa más reciente o mejorada. Eventualmente, las características obsoletas pueden ser eliminadas en versiones futuras del software.

// En el código proporcionado, se define un decorador Deprecated que se utiliza para marcar métodos como obsoletos y emitir una advertencia cuando se llaman. Aquí está el decorador Deprecated:

// Este decorador toma una razón de deprecación como argumento y retorna una función que envuelve el método original. Cuando el método decorado se llama, se emite una advertencia en la consola indicando que el método está obsoleto y proporcionando la razón de deprecación.

// En la clase Pokemon, el método speak2 está decorado con @Deprecated:

// Cuando se llama al método speak2, se emite una advertencia en la consola:

// Salida en la consola:

// En resumen, el decorador Deprecated se utiliza para marcar métodos como obsoletos y advertir a los desarrolladores que deben evitar su uso y considerar alternativas más recientes. Esto puede ayudar a mantener el código actualizado y fomentar buenas prácticas de desarrollo.