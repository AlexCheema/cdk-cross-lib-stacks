import * as cdk from '@aws-cdk/core';
import * as s3 from "@aws-cdk/aws-s3";
import { Stack } from '@aws-cdk/core';

export class TestAppStack extends cdk.Stack {
  public readonly bucket: s3.IBucket;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const bucket = new s3.Bucket(this, "AppBucket", { removalPolicy: cdk.RemovalPolicy.DESTROY });

    this.bucket = bucket;
  }
}
