import * as path from 'path';
import { NestMiddleware, Injectable } from '@nestjs/common';
import { ROUTE_PREFIX, ANGULAR_ROUTING_START, REACT_ROUTING_START } from '../routes/routes';
import { RouteType } from './middleware-enums';

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
const resolvePath = (file: string, type: string) => {
  const directory = type === RouteType.ANGULAR ? 'website-code-angular' : 'website-code-react';
  if (allowedExt.filter(ext => file.indexOf(ext) > 0).length > 0) {
    return path.resolve(path.join(__dirname, '..', directory, file));
  }
  return path.resolve(path.join(__dirname, '..', directory, 'index.html'));
}

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const url = req.baseUrl;
    if (url.indexOf(ROUTE_PREFIX) === 1) {
      // it starts with /api --> continue with execution
      next();
    } else {
      if (url.indexOf(ANGULAR_ROUTING_START) >= 0) {
        res.sendFile(resolvePath(url, RouteType.ANGULAR));
      } else if(url.indexOf(REACT_ROUTING_START) >= 0) {
        res.sendFile(resolvePath(url, RouteType.REACT));
      }
    }
  };
}