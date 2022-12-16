import * as cdk from 'aws-cdk-lib';
import { HttpOpenApi } from 'cdk-http-openapi';
import { Construct } from 'constructs';

interface BookshelvesAPIProps extends cdk.StackProps {
  bookshelveId: string,
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
          operationId: 'getBookshelveBooks',
          handler: 'getBookshelveBooksHandler.handler',
          env: {
            BOOKSHELVE_ID: props?.bookshelveId,
            USER_ID: props?.userId,
          }
        }
      ]
    })

    new cdk.CfnOutput(this, "APIURL", {
      value: api.cfnApi.attrApiEndpoint,
    })
  }
}
