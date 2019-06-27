import { Controller, Get, Res } from "@nestjs/common";
import { Response } from 'express';
import { REACT_ROUTE } from '../../routes/route-consts';
import { UrlService } from '../../services/url-service/url-service';

@Controller(REACT_ROUTE)
export class ReactController {
  constructor(private readonly urlService: UrlService) {

  }

  @Get()
  getApp(@Res() res: Response) {
    res.sendFile(this.urlService.resolvePath(REACT_ROUTE));
  }
}