import { Controller, Get, Res } from "@nestjs/common";
import { Response } from 'express';
import { ANGULAR_ROUTE } from '../../routes/route-consts';
import { StaticFileService } from '../../services/static-file/static-file.service';

@Controller(ANGULAR_ROUTE)
export class AngularController {
  constructor(private readonly StaticFileService: StaticFileService) {

  }

  @Get()
  getApp(@Res() res: Response) {
    res.sendFile(this.StaticFileService.resolvePath(ANGULAR_ROUTE));
  }
}