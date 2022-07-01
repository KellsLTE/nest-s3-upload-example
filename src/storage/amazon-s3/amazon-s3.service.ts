import { Injectable, Req, Res } from '@nestjs/common';
import * as AWS from 'aws-sdk';

const S3BucketName = 'nest-example-bucket';
const s3 = new AWS.S3({
  accessKeyId: 'AKIA3PQ6I4ODYKGEDXD7',
  secretAccessKey: 'ixvPqwcsxNgIn5VZr3yjQHD495lPJR6F+dv/431D',
});

@Injectable()
export class AmazonS3Service {
  public async uploadFile(file: any): Promise<string> {
    const urlKey = `filepath/${file.originalname}`;
    const params = {
      Body: file.buffer,
      Bucket: S3BucketName,
      Key: urlKey,
    };

    const data = await s3
      .putObject(params)
      .promise()
      .then(
        (data) => {
          console.log(data);
          return urlKey;
        },
        (err) => {
          console.error(err);
          return err;
        },
      );
    return data;
  }
}
