import { Module } from "@nestjs/common";
import { CrowdDjApiModule } from './crowd-dj/crowd-dj-api.module';

@Module({
  imports: [
    CrowdDjApiModule
  ],
  controllers: [],
  exports: [
    CrowdDjApiModule
  ],
  providers: []
})
export class ApiModule {}