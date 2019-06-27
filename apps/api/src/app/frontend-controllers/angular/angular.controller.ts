import { Controller, Get, Res } from "@nestjs/common";
import { Response } from 'express';
import { ANGULAR_ROUTE } from '../../routes/route-consts';
import { UrlService } from '../../services/url-service/url-service';

@Controller(ANGULAR_ROUTE)
export class AngularController {
  constructor(private readonly urlService: UrlService) {

  }

  @Get()
  getApp(@Res() res: Response) {
    res.sendFile(this.urlService.resolvePath(ANGULAR_ROUTE));
  }
}