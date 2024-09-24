import { Injectable, Inject } from '@nestjs/common';
import { S3 } from 'aws-sdk';
// import { Express } from 'express';

@Injectable()
export class BannersService {
  constructor(@Inject('S3') private readonly s3: S3) {}

  async uploadImage(file: any) {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: `uploads/${file.originalname}`,
      Body: file.buffer,
      ACL: 'public-read',
    };

    return this.s3.upload(params).promise();
  }
}
