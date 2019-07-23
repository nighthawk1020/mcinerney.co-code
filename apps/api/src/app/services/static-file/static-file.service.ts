import { join, resolve} from 'path';
import { Response } from 'express';
import { CROWD_DJ_ROUTE, ANGULAR_ROUTE, REACT_ROUTE, PODCAST_ROUTE } from '../../routes/route-prefixes';
import { podcastHomepageHtml } from '../podcast/podcast-homepage';
import { podcastRss } from '../podcast/podcast-rss';
import { podcastMapping } from '../podcast/podcast-file-manager';

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
  '.rss',
  '.mp3'
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

export function sendPodcasts(res: Response, url: string) {
  if (allowedExt.filter(ext => url.indexOf(ext) > 0).length === 0) {
    res.send(podcastHomepageHtml);
  } else if (url.indexOf('.rss') >= 0) {
    res.send(podcastRss);
  } else if (url.indexOf('.mp3') >= 0) {
    res.send(podcastMapping[url]);
  } else if (url.indexOf('.png') >= 0 || url.indexOf('.jpg') >= 0) {
    res.sendFile(join(__dirname, 'assets/Hercule.jpg'));
  }
}

export function sendReact(res: Response, url: string) {
  res.sendFile(resolvePath(REACT_ROUTE, url));
}
