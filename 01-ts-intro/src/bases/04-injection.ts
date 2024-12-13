import { Move, PokeAPIResponse } from '../interface/pokeapi-response.interface'
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter'

export class Person {
  get  imageUrl() {
    return `https://randomuser.me/api/portraits/${this.id}.jpg`
  }
  constructor(
    public readonly id: number,
    public name: string,
    // INYECCION DE DEPENDENCIAS
    private readonly http: HttpAdapter
  ) {}
  talk() {
   console.log(`I'm ${this.name}`)
  }
  welcome() {
    console.log(`Welcome ${this.name}`)
  }

  async getHi(): Promise<Move[]> {
  const data = await this.http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/4`)
  console.log(data.moves)
  return data.moves
  }
} 

const pokeApiAxios = new PokeApiAdapter()
const pokeApiFetch = new PokeApiFetchAdapter()
export const persons: Person[] = [
  new Person(6, 'Tony', pokeApiFetch),
]

console.log(persons)

persons[0].talk()
persons[0].welcome()
persons[0].getHi()


// La inyección de dependencias es un patrón de diseño que permite a un objeto recibir sus dependencias de una fuente externa en lugar de crearlas por sí mismo. Este patrón promueve la separación de preocupaciones y facilita la prueba y el mantenimiento del código.

// En el contexto de este codigo, la clase Person recibe una instancia de HttpAdapter a través de su constructor. Esto es un ejemplo de inyección de dependencias. En lugar de que la clase Person cree su propia instancia de HttpAdapter, se le proporciona una instancia desde fuera, lo que hace que la clase sea más flexible y fácil de probar.

// Aquí está el constructor de la clase Person que muestra la inyección de dependencias:

// En este caso, http es una dependencia que se inyecta en la clase Person. Cuando se crea una instancia de Person, se le pasa una instancia de HttpAdapter (por ejemplo, PokeApiFetchAdapter):

// Esto permite que la clase Person utilice http para realizar solicitudes HTTP sin preocuparse por los detalles de implementación de HttpAdapter