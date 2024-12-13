import axios from "axios"

export interface HttpAdapter {
  get<T>(url: string): Promise<T>
  post(url: string, body: any): Promise<any>
  patch(url: string, body: any): Promise<any>
  delete(url: string): Promise<any>
}

export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url)
    return response.json()
  }
  async post(url: string, body: any){}
  async patch(url: string, body: any){}
  async delete(url: string){}
}

export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios
 async get<T>( url: string): Promise<T> {
  const {data} = await this.axios.get<T>(url)
    return data
  }
  async post(url: string, body: any){}
  async patch(url: string, body: any){}
  async delete(url: string){}
}