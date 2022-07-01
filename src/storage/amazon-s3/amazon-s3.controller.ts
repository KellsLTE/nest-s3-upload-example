import { AmazonS3Service } from './amazon-s3.service';
import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('s3')
export class AmazonS3Controller {
  constructor(private amazonService: AmazonS3Service) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFiles() file: Express.Multer.File) {
    return await this.amazonService.uploadFile(file);
  }
}
