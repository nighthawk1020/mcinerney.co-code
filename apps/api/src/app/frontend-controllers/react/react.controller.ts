import { Controller, Get, Res } from "@nestjs/common";
import { Response } from 'express';
import { REACT_ROUTE } from '../../routes/route-consts';
import { StaticFileService } from '../../services/static-file/static-file.service';

@Controller(REACT_ROUTE)
export class ReactController {
  constructor(private readonly StaticFileService: StaticFileService) {

  }

  @Get()
  getApp(@Res() res: Response) {
    res.sendFile(this.StaticFileService.resolvePath(REACT_ROUTE));
  }
}