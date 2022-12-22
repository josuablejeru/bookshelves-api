import * as cdk from 'aws-cdk-lib';
import { HttpOpenApi } from 'cdk-http-openapi';
import { Construct } from 'constructs';

interface BookshelvesAPIProps extends cdk.StackProps {
  bookshelfId: string,
  userId: string
}


export class BookshelvesAPI extends cdk.Stack {
  constructor(scope: Construct, id: string, props: BookshelvesAPIProps) {
    super(scope, id, props);

    const api = new HttpOpenApi(this, 'BookshelvesAPI', {
      functionNamePrefix: 'bookshelves-api',
      openApiSpec: '../openapi.yaml',
      corsAllowAllOrigins: true,
      lambdasSourcePath: '.build/lambda',
      integrations: [
        {
          operationId: 'getBookshelfBooks',
          handler: 'getBookshelfBooksHandler.handler',
          env: {
            BOOKSHELF_ID: props?.bookshelfId,
            USER_ID: props?.userId,
          }
        },
        {
          operationId: 'getOpenapiDefinition',
          handler: 'getOpenapiDefinition.handler',
        }
      ]
    })

    new cdk.CfnOutput(this, "APIURL", {
      value: api.cfnApi.attrApiEndpoint,
    })
  }
}
