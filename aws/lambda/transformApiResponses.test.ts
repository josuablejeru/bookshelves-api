import { toBookResponse } from './transformApiResponse'

describe("Test toBookResponse", () => {

  it("should transform the right schema", () => {
    const sampleData = {
      "kind": "books#volume",
      "id": "XrQcrgEACAAJ",
      "etag": "tD5ZyMwGy5A",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/XrQcrgEACAAJ",
      "volumeInfo": {
        "title": "The DevOps Handbook",
        "subtitle": "How to Create World-Class Speed, Reliability, and Security in Technology Organizations",
        "authors": [
          "Gene Kim",
          "Patrick Debois",
          "John Willis",
          "Jez Humble"
        ],
        "publisher": "It Revolution Press",
        "publishedDate": "2015-10-07",
        "description": "For decades, technology leaders have struggled to balance agility, reliability, and security, and the consequences of failure have never been greater. The effective management of technology is critical for business competitiveness. High ...",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "1942788002"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781942788003"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 480,
        "printType": "BOOK",
        "categories": [
          "Business & Economics"
        ],
        "averageRating": 4,
        "ratingsCount": 4,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=XrQcrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=XrQcrgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "previewLink": "http://books.google.de/books?id=XrQcrgEACAAJ&hl=&source=gbs_api",
        "infoLink": "http://books.google.de/books?id=XrQcrgEACAAJ&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_DevOps_Handbook.html?hl=&id=XrQcrgEACAAJ"
      },
      "saleInfo": {
        "country": "DE",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "DE",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=XrQcrgEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      }
    }

    const expectedObject = {
      id: "XrQcrgEACAAJ",
      title: "The DevOps Handbook",
      subtitle: "How to Create World-Class Speed, Reliability, and Security in Technology Organizations",
      authors: [
        "Gene Kim",
        "Patrick Debois",
        "John Willis",
        "Jez Humble"
      ],
      publishedDate: "2015-10-07",
      description: "For decades, technology leaders have struggled to balance agility, reliability, and security, and the consequences of failure have never been greater. The effective management of technology is critical for business competitiveness. High ...",
      identifiers: [
        {
          "type": "ISBN_10",
          "identifier": "1942788002"
        },
        {
          "type": "ISBN_13",
          "identifier": "9781942788003"
        }
      ],
      imageLinks: {
        smallThumbnail: "http://books.google.com/books/content?id=XrQcrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail: "http://books.google.com/books/content?id=XrQcrgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      },
    }

    expect(toBookResponse(sampleData)).toMatchObject(expectedObject)
  })
})