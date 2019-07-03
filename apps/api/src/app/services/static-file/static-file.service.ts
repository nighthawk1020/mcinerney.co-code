import { Injectable } from "@nestjs/common";
import { join, resolve} from 'path';
const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

@Injectable()
export class StaticFileService {
  resolvePath(directory: string, file?: string) {
    if (allowedExt.filter(ext => file.indexOf(ext) > 0).length === 0) {
      return resolve(join(__dirname, '..', directory, 'index.html'));
    } else if (file) {
      return resolve(join(__dirname, '..', directory, file));
    }
    return null;
  }
}