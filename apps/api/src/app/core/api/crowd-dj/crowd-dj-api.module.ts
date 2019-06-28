import { Module } from "@nestjs/common";
import { CrowdDjApiController } from './crowd-dj-api.controller';

@Module({
  imports: [],
  controllers: [
    CrowdDjApiController
  ]
})
export class CrowdDjApiModule {}