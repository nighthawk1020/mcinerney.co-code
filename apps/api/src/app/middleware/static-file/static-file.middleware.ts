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
    if (url.indexOf(ROUTE_PREFIX) < 0) {
      if (url.indexOf(ANGULAR_ROUTE) >= 0) {
        this.StaticFileService.sendAngular(res, url);
      } else if (url.indexOf(CROWD_DJ_ROUTE) >= 0) {
        this.StaticFileService.sendCrowdDj(res, url);
      } else if(url.indexOf(REACT_ROUTE) >= 0) {
        this.StaticFileService.sendReact(res, url);
      }
    } else {
      next();
    }
  };
}