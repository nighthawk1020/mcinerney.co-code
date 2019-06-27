import { Module } from "@nestjs/common";
import { CrowdDjController } from './crowd-dj.controller';

@Module({
  imports: [],
  controllers: [
    CrowdDjController
  ]
})
export class CrowdDjModule {}