import { Module } from "@nestjs/common";
import { CrowdDjApiController } from './crowd-dj-api.controller';
import { environment } from '../../../../environments/environment';
import { ServicesModule } from '../../../services/services.module';

@Module({
  controllers: [
    CrowdDjApiController
  ],
  imports: [
    ServicesModule
  ],
  providers: [
    {
      provide: 'baseUri',
      useValue: environment.baseUri
    }
  ]
})
export class CrowdDjApiModule {}