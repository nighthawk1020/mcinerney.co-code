import { Request, Response } from 'express';
import { 
  ANGULAR_ROUTE,
  CROWD_DJ_ROUTE,
  ROUTE_PREFIX,
  PODCAST_ROUTE
} from '../../routes/route-prefixes';
import { sendCrowdDj, sendAngular, sendPodcasts } from '../../services/static-file/static-file.service';

export function StaticFileMiddleware (req: Request, res: Response, next: () => void) {
  const url = req.url;
  if (url.indexOf(PODCAST_ROUTE) >= 0) {
    sendPodcasts(res, url);
  } else if (url.indexOf(ROUTE_PREFIX) < 0) {
    if (url.indexOf(ANGULAR_ROUTE) >= 0) {
      sendAngular(res, url);
    } else if (url.indexOf(CROWD_DJ_ROUTE) >= 0) {
      sendCrowdDj(res, url);
    }
  } else {
    next();
  }
}