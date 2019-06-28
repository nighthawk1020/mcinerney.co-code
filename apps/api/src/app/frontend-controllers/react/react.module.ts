import { Module } from "@nestjs/common";
import { ReactController } from './react.controller';
import { ServicesModule } from '../../services/services.module';

@Module({
  imports: [
    ServicesModule
  ],
  controllers: [
    ReactController
  ],
  exports: []
})
export class ReactModule {}