import { Module } from "@nestjs/common";
import { CrowdDjApiController } from './crowd-dj-api.controller';
import { environment } from '../../../../environments/environment';

@Module({
  controllers: [
    CrowdDjApiController
  ],
  providers: [
    {
      provide: 'baseUri',
      useValue: environment.baseUri
    }
  ]
})
export class CrowdDjApiModule {}