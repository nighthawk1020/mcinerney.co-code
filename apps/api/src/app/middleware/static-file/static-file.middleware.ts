import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { 
  ANGULAR_ROUTE,
  CROWD_DJ_ROUTE,
  REACT_ROUTE,
  ROUTE_PREFIX
} from '../../routes/route-consts';
import { UrlService } from '../../services/url-service/url-service';


@Injectable()
export class StaticFileMiddleware implements NestMiddleware {
  constructor(private readonly urlService: UrlService) {

  }
  
  use(req: Request, res: Response, next: () => void) {
    const url = req.baseUrl;
    let filePath;
    if (url.indexOf(ROUTE_PREFIX) < 0) {
      if (url.indexOf(ANGULAR_ROUTE) >= 0) {
        filePath = this.urlService.resolvePath(ANGULAR_ROUTE, url);
      } else if (url.indexOf(CROWD_DJ_ROUTE) >= 0) {
        filePath = this.urlService.resolvePath(CROWD_DJ_ROUTE, url);
      } else if(url.indexOf(REACT_ROUTE) >= 0) {
        filePath = this.urlService.resolvePath(REACT_ROUTE, url);
      }
    }
    if (filePath) {
      res.sendFile(filePath);
    } else {
      next();
    }
  };
}