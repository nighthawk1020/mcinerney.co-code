import { Injectable } from "@nestjs/common";
import { join, resolve} from 'path';
import { Response } from 'express';
import { CROWD_DJ_ROUTE, ANGULAR_ROUTE, REACT_ROUTE } from '../../routes/route-consts';
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

  sendAngular(res: Response, url: string) {
    res.sendFile(this.resolvePath(ANGULAR_ROUTE, url));
  }

  sendCrowdDj(res: Response, url: string) {
    res.sendFile(this.resolvePath(CROWD_DJ_ROUTE, url));
  }

  sendReact(res: Response, url: string) {
    res.sendFile(this.resolvePath(REACT_ROUTE, url));
  }
}