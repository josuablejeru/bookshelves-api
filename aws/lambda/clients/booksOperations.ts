import { AxiosInstance } from 'axios'

export const getBooksFromBookshelve = async (client: AxiosInstance, userId: bigint, bookshelveId: number) => {
  return client.get(`/users/${userId}/bookshelves/${bookshelveId}/volumes`)
}