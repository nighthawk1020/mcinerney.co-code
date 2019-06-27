import { Controller, Get, Res } from "@nestjs/common";
import { Response } from 'express';
import { CROWD_DJ_ROUTE } from '../../routes/route-consts';
import { UrlService } from '../../services/url-service/url-service';

@Controller(CROWD_DJ_ROUTE)
export class CrowdDjController {
  constructor(private readonly urlService: UrlService) {

  }

  @Get()
  getApp(@Res() res: Response) {
    res.sendFile(this.urlService.resolvePath(CROWD_DJ_ROUTE));
  }
}