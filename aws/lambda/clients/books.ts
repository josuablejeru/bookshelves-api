import axios, { AxiosInstance } from 'axios'

let client: AxiosInstance

export const getBooksClient = (): AxiosInstance => {
  if (client == undefined) {
    client = createClient()
  }

  return client
}

const createClient = () => {
  return axios.create({ baseURL: "https://www.googleapis.com/books/v1" })
}