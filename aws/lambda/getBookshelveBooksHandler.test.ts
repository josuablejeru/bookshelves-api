import { handler } from './getBookshelveBooksHandler'
import { BookResponse } from './types'
import { getBooksFromBookshelve } from './clients/booksOperations'


describe("test lambda handler", () => {

  test('should return a empty list of books from external api', () => {

    const spy = jest.spyOn(getBooksFromBookshelve, 'getBooksFromBookshelve').

    const expectedResult: BookResponse = { response: [] }
    expect(handler()).toMatchObject(expectedResult)
  })
})