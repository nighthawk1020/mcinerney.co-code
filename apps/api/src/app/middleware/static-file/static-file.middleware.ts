import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { 
  ANGULAR_ROUTE,
  CROWD_DJ_ROUTE,
  REACT_ROUTE,
  ROUTE_PREFIX
} from '../../routes/route-consts';
import { StaticFileService } from '../../services/static-file/static-file.service';


@Injectable()
export class StaticFileMiddleware implements NestMiddleware {
  constructor(private readonly StaticFileService: StaticFileService) {

  }
  
  use(req: Request, res: Response, next: () => void) {
    const url = req.baseUrl;
    let filePath;
    if (url.indexOf(ROUTE_PREFIX) < 0) {
      if (url.indexOf(ANGULAR_ROUTE) >= 0) {
        filePath = this.StaticFileService.resolvePath(ANGULAR_ROUTE, url);
      } else if (url.indexOf(CROWD_DJ_ROUTE) >= 0) {
        filePath = this.StaticFileService.resolvePath(CROWD_DJ_ROUTE, url);
      } else if(url.indexOf(REACT_ROUTE) >= 0) {
        filePath = this.StaticFileService.resolvePath(REACT_ROUTE, url);
      }
    }
    if (filePath) {
      res.sendFile(filePath);
    } else {
      next();
    }
  };
}