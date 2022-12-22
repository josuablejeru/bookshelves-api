import { toApiResult } from './utils'
import { getBooksClient } from './clients/books'
import { getBooksConfig } from './config'
import { BookResponse } from './types'
import { toBookResponse } from './transformApiResponse'
import { getBooksFromBookshelve } from './clients/booksOperations'


export const handler = async () => {
  const bookClient = getBooksClient()
  const booksConfig = getBooksConfig()

  const rawBooksApiResult = await getBooksFromBookshelve(bookClient, booksConfig.USER_ID, booksConfig.BOOKSHELVE_ID)

  const mappedData = rawBooksApiResult.data?.items.map((bookentry: Record<string, any>) => (toBookResponse(bookentry)))

  const lambdaResponse: BookResponse = { response: mappedData || [] }

  return toApiResult(200, lambdaResponse)
}
