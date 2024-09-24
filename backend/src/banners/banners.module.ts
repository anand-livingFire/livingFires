import { Module } from '@nestjs/common';
import { BannersService } from './banners.service';
import { BannersController } from './banners.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';

@Module({
  imports: [ConfigModule],
  providers: [
    BannersService,
    {
      provide: 'S3',
      useFactory: (configService: ConfigService) => {
        return new S3({
          accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
          secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
        });
      },
      inject: [ConfigService],
    },
  ],
  controllers: [BannersController],
})
export class BannersModule {}
