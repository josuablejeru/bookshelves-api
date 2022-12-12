import * as cdk from 'aws-cdk-lib';
import { HttpOpenApi } from 'cdk-http-openapi';
import { Construct } from 'constructs';

export class BookshelvesAPI extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new HttpOpenApi(this, 'BookshelvesAPI', {
      functionNamePrefix: 'bookshelves-api',
      openApiSpec: '../openapi.yaml',
      corsAllowAllOrigins: true,
      lambdasSourcePath: '.build/lambda',
      integrations: [
        {
          operationId: 'getBookshelve',
          handler: 'getBookshelve.handler'
        }
      ]
    })

    new cdk.CfnOutput(this, "APIURL", {
      value: api.cfnApi.attrApiEndpoint,
    })
  }
}
