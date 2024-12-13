import axios from 'axios'
import { Move, PokeAPIResponse } from '../interface/pokeapi-response.interface'

export class Person {
  get  imageUrl() {
    return `https://randomuser.me/api/portraits/${this.id}.jpg`
  }
  constructor(
    public readonly id: number,
    public name: string,
  ) {}
  talk() {
   console.log(`I'm ${this.name}`)
  }
  welcome() {
    console.log(`Welcome ${this.name}`)
  }

  async getHi(): Promise<Move[]> {
  const {data} = await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/4`)
  console.log(data.moves[0].move.name)
  return data.moves
  }
} 

export const persons: Person[] = [
  new Person(6, 'Tony')
]

console.log(persons)

persons[0].talk()
persons[0].welcome()
persons[0].getHi()