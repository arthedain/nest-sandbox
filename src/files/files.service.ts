import { Injectable } from '@nestjs/common';
import { ExceptionHandler } from '@nestjs/core/errors/exception-handler';
import { randomUUID } from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FilesService {
  public async save(file): Promise<string> {
    try {
      const name = randomUUID() + path.extname(file.originalname);

      const filePath = path.resolve(__dirname, '..', 'storage');

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.join(filePath, name), file.buffer);

      return name;
    } catch (e) {
      throw new ExceptionHandler();
    }
  }
}
