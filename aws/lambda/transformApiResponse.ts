import { Book } from './types'

export const toBookResponse = (rawDataObject: Record<string, any>): Book => {
  const mapper: Book = {
    id: rawDataObject.id,
    title: rawDataObject?.volumeInfo?.title,
    subtitle: rawDataObject?.volumeInfo?.subtitle,
    authors: rawDataObject?.volumeInfo?.authors,
    publishedDate: rawDataObject?.volumeInfo?.publishedDate,
    description: rawDataObject?.volumeInfo?.description,
    identifiers: rawDataObject?.volumeInfo?.industryIdentifiers,
    imageLinks: rawDataObject?.volumeInfo?.imageLinks,
  }

  return mapper
}