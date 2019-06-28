import { Module } from "@nestjs/common";
import { AngularController } from './angular.controller';
import { ServicesModule } from '../../services/services.module';

@Module({
  imports: [
    ServicesModule
  ],
  controllers: [
    AngularController
  ],
  exports: []
})
export class AngularModule {}