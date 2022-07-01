import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmazonS3Service } from './storage/amazon-s3/amazon-s3.service';
import { CloudinaryService } from './storage/cloudinary/cloudinary.service';
import { GoogleDriveService } from './storage/google-drive/google-drive.service';
import { GoogleDriveController } from './storage/google-drive/google-drive.controller';
import { AmazonS3Controller } from './storage/amazon-s3/amazon-s3.controller';
import { CloudinaryController } from './storage/cloudinary/cloudinary.controller';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [AppController, GoogleDriveController, AmazonS3Controller, CloudinaryController],
  providers: [AppService, AmazonS3Service, CloudinaryService, GoogleDriveService],
})
export class AppModule {}
