import {
  Controller,
  Res,
  Req,
  Next,
  Get,
  Post,
  UseInterceptors,
  UploadedFiles,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { NextFunction, Request, Response } from 'express';
import { DriveConfig } from './config';
import { GoogleDriveService } from './google-drive.service';
import * as multerGoogleStorage from 'multer-google-storage';

@Controller('drive')
export class GoogleDriveController {
  constructor(private driveService: GoogleDriveService) {}

  @Get('download/:fileId')
  async downloadFile(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ): Promise<any> {
    return await this.driveService.downloadFile(req, res, next);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', null, {
      storage: multerGoogleStorage.storageEngine(DriveConfig),
    }),
  )
  async uploadFile (@UploadedFiles() file, @Body() body): Promise<ApiResult>
  {
      return this.driveService.uploadFile(file, body);
  };
}
