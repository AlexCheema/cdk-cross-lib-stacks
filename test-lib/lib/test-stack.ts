import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";

export interface ImportedStackProps extends cdk.StackProps {
    importedBucket: s3.IBucket;
}

export class ImportedStack extends cdk.Stack {
  public readonly bucket: s3.IBucket;

  constructor(scope: cdk.Construct, id: string, props: ImportedStackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, "DummyBucket", { removalPolicy: cdk.RemovalPolicy.DESTROY });

    new cdk.CfnOutput(this, "ImportedBucket", { value: props.importedBucket.bucketArn, exportName: "ImportedBucket" })

    this.bucket = bucket;
  }
}
