import { handler } from './getBookshelfBooksHandler'
import mockAxios from "jest-mock-axios";


jest.mock('axios')


describe("test lambda handler", () => {
  afterEach(() => {
    mockAxios.reset()
  });

  beforeEach(() => {
    mockAxios.reset()
  })

  test('should return a empty list of books from external api', async () => {

    mockAxios.get.mockResolvedValue({
      "kind": "books#volumes",
      "totalItems": 0,
      "items": []
    })

    const result = JSON.parse(await (await handler()).body)
    expect(result?.response.length).toBe(0)
  })

  test('should return a list of books from external api', async () => {

    mockAxios.get.mockResolvedValue({
      "kind": "books#volumes",
      "totalItems": 2,
      "items": [
        {
          "kind": "books#volume",
          "id": "XrQcrgEACAAJ",
          "etag": "Yge9cjo9LQ4",
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
            "previewLink": "http://books.google.ro/books?id=XrQcrgEACAAJ&hl=&source=gbs_api",
            "infoLink": "http://books.google.ro/books?id=XrQcrgEACAAJ&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/The_DevOps_Handbook.html?hl=&id=XrQcrgEACAAJ"
          },
          "saleInfo": {
            "country": "RO",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
          },
          "accessInfo": {
            "country": "RO",
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
        },
        {
          "kind": "books#volume",
          "id": "H6x-DwAAQBAJ",
          "etag": "1PM45oG1r0g",
          "selfLink": "https://www.googleapis.com/books/v1/volumes/H6x-DwAAQBAJ",
          "volumeInfo": {
            "title": "The Phoenix Project",
            "subtitle": "A Novel about IT, DevOps, and Helping Your Business Win",
            "authors": [
              "Gene Kim",
              "Kevin Behr",
              "George Spafford"
            ],
            "publisher": "IT Revolution",
            "publishedDate": "2018-02-06",
            "description": "***Over a half-million sold! The sequel, The Unicorn Project, is coming Nov 26*** “Every person involved in a failed IT project should be forced to read this book.”—TIM O’REILLY, Founder & CEO of O’Reilly Media “The Phoenix Project is a must ...",
            "industryIdentifiers": [
              {
                "type": "ISBN_13",
                "identifier": "9781942788300"
              },
              {
                "type": "ISBN_10",
                "identifier": "1942788304"
              }
            ],
            "readingModes": {
              "text": true,
              "image": true
            },
            "pageCount": 432,
            "printType": "BOOK",
            "categories": [
              "Business & Economics"
            ],
            "averageRating": 4.5,
            "ratingsCount": 2,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.4.4.0.preview.3",
            "panelizationSummary": {
              "containsEpubBubbles": false,
              "containsImageBubbles": false
            },
            "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=H6x-DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=H6x-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "previewLink": "http://books.google.ro/books?id=H6x-DwAAQBAJ&printsec=frontcover&hl=&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=H6x-DwAAQBAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=H6x-DwAAQBAJ"
          },
          "layerInfo": {
            "layers": [
              {
                "layerId": "geo",
                "volumeAnnotationsVersion": "6"
              }
            ]
          },
          "saleInfo": {
            "country": "RO",
            "saleability": "FOR_SALE",
            "isEbook": true,
            "listPrice": {
              "amount": 69.11,
              "currencyCode": "RON"
            },
            "retailPrice": {
              "amount": 69.11,
              "currencyCode": "RON"
            },
            "buyLink": "https://play.google.com/store/books/details?id=H6x-DwAAQBAJ&rdid=book-H6x-DwAAQBAJ&rdot=1&source=gbs_api",
            "offers": [
              {
                "finskyOfferType": 1,
                "listPrice": {
                  "amountInMicros": 69110000,
                  "currencyCode": "RON"
                },
                "retailPrice": {
                  "amountInMicros": 69110000,
                  "currencyCode": "RON"
                }
              }
            ]
          },
          "accessInfo": {
            "country": "RO",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
              "isAvailable": true,
              "acsTokenLink": "http://books.google.ro/books/download/The_Phoenix_Project-sample-epub.acsm?id=H6x-DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
              "isAvailable": true,
              "acsTokenLink": "http://books.google.ro/books/download/The_Phoenix_Project-sample-pdf.acsm?id=H6x-DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=H6x-DwAAQBAJ&hl=&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
          }
        }
      ]
    })

    const result = JSON.parse(await (await handler()).body)
    expect(result?.response.length).toBe(1)
  })
})