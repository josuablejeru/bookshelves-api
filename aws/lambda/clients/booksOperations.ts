import { AxiosInstance } from 'axios'

export const getBooksFromBookshelf = async (client: AxiosInstance, userId: bigint, bookshelfId: number) => {
  return client.get(`/users/${userId}/bookshelves/${bookshelfId}/volumes`)
}