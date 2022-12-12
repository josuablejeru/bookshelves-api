import { toApiResult } from './utils'
import { APIGatewayEvent } from 'aws-lambda'
import { getBooksClient } from './clients/books'
import { AxiosInstance } from 'axios'
import { getBooksConfig } from './config'


export const handler = async (event: APIGatewayEvent) => {
  const bookClient = getBooksClient()
  const booksConfig = getBooksConfig()

  const result = await getBooksFromBookshelve(bookClient, booksConfig.USER_ID, booksConfig.BOOKSHELVE_ID)

  return toApiResult(200, { result: result?.data?.items })
}

const getBooksFromBookshelve = async (client: AxiosInstance, userId: bigint, bookshelveId: number) => {
  return client.get(`/users/${userId}/bookshelves/${bookshelveId}/volumes`)
}