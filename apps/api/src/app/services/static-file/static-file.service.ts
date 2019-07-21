import { join, resolve} from 'path';
import { Response } from 'express';
import { CROWD_DJ_ROUTE, ANGULAR_ROUTE, REACT_ROUTE } from '../../routes/route-prefixes';
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

function resolvePath(directory: string, file?: string) {
  if (allowedExt.filter(ext => file.indexOf(ext) > 0).length === 0) {
    return resolve(join(__dirname, '..', directory, 'index.html'));
  } else if (file) {
    return resolve(join(__dirname, '..', directory, file));
  }
  return null;
}

export function sendAngular(res: Response, url: string) {
  res.sendFile(resolvePath(ANGULAR_ROUTE, url));
}

export function sendCrowdDj(res: Response, url: string) {
  res.sendFile(resolvePath(CROWD_DJ_ROUTE, url));
}

export function sendReact(res: Response, url: string) {
  res.sendFile(resolvePath(REACT_ROUTE, url));
}
