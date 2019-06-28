import { Controller, Get, Res } from "@nestjs/common";
import { Response } from 'express';
import { CROWD_DJ_ROUTE } from '../../routes/route-consts';
import { StaticFileService } from '../../services/static-file/static-file.service';

@Controller(CROWD_DJ_ROUTE)
export class CrowdDjController {
  constructor(private readonly staticFileService: StaticFileService) {}

  @Get()
  getApp(@Res() res: Response) {
    res.sendFile(this.staticFileService.resolvePath(CROWD_DJ_ROUTE));
  }
}