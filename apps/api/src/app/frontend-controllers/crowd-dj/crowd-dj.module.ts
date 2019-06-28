import { Module } from "@nestjs/common";
import { CrowdDjController } from './crowd-dj.controller';
import { ServicesModule } from '../../services/services.module';

@Module({
  imports: [
    ServicesModule
  ],
  controllers: [
    CrowdDjController
  ],
  exports: []
})
export class CrowdDjModule {}