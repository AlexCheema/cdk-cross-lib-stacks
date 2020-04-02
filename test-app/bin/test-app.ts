#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TestAppStack } from '../lib/test-app-stack';
import { ImportedStack } from 'test-lib';

const app = new cdk.App();

const env = { account: "111111111111", region: "us-east-1" };

const testAppStack = new TestAppStack(app, 'TestAppStack');
new ImportedStack(app, "ImportedStack", { importedBucket: testAppStack.bucket });
