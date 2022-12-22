#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BookshelvesAPI } from '../lib/aws-stack';

const app = new cdk.App();
new BookshelvesAPI(app, 'BookshelvesAPI', {
  stackName: "BookshelvesAPI",
  bookshelfId: process.env.BOOKSHELF_ID || '',
  userId: process.env.USER_ID || ''
});