/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/bookshelf/books": {
    /**
     * get my public bookshelf 
     * @description Returns a collection of books I found valuable
     */
    get: operations["getBookshelfBooks"];
  };
  "/openapi.json": {
    /**
     * the openapi definition of this api 
     * @description Returns this openapi definition to be used by external services
     */
    get: operations["getOpenapiDefinition"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Book: {
      /**
       * Format: uuid 
       * @example XrQcrgEACAAJ
       */
      id?: string;
      /** @example The DevOps Handbook */
      title?: string;
      /** @example How to Create World-Class Speed, Reliability, and Security in Technology Organizations" */
      subtitle?: string;
      /**
       * @example [
       *   "Gene Kim",
       *   "Patrick Debois",
       *   "John Willis",
       *   "Jez Humble"
       * ]
       */
      authors?: (string)[];
      /**
       * Format: time 
       * @example 2015-10-07
       */
      publishedDate?: string;
      /**
       * @example For decades, technology leaders have struggled to balance agility,
       * reliability, and security, and the consequences of failure have never been greater.
       * The effective management of technology is critical for business competitiveness. High ...
       */
      description?: string;
      identifiers?: ({
          /** @example ISBN_10 */
          type?: string;
          /** @example 1942788002 */
          identifier?: string;
        })[];
      imageLinks?: {
        /**
         * Format: uri 
         * @example http://books.google.com/books/content?id=XrQcrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api
         */
        smallThumbnail?: string;
        /**
         * Format: uri 
         * @example http://books.google.com/books/content?id=XrQcrgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
         */
        thumbnail?: string;
      };
    };
    BookResponse: {
      response?: (components["schemas"]["Book"])[];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  getBookshelfBooks: {
    /**
     * get my public bookshelf 
     * @description Returns a collection of books I found valuable
     */
    responses: {
      /** @description successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["BookResponse"];
        };
      };
    };
  };
  getOpenapiDefinition: {
    /**
     * the openapi definition of this api 
     * @description Returns this openapi definition to be used by external services
     */
    responses: {
      /** @description return openapi definition as JSON */
      200: {
        content: {
          "application/json": Record<string, never>;
        };
      };
    };
  };
}
