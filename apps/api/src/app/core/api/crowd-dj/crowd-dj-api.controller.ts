
import { Controller, Get, Res } from "@nestjs/common";
import { Response } from 'express';

@Controller()
export class CrowdDjApiController {
  constructor() {}

  @Get()
  getApp(@Res() res: Response) {
    console.log('ASDFASDFSAD');
  }
}