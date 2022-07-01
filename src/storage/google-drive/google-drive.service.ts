import { Injectable, Get, Next } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class GoogleDriveService {
  async downloadFile(req, res, next) {
    const body = req.params;

    const file = bucket.file(`/${body.fileId}`);

    const stream = bucket.file(file).createReadStream();

    res.writeHead(200, {
      'Content-Type': 'image/jpg',
    });

    stream.on('data', (data) => res.write(data));

    stream.on('error', (err) => console.error(err));

    stream.on('end', () => res.end());
  } 
}
