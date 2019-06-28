import { Module } from "@nestjs/common";
import { CrowdDjModule } from './crowd-dj/crowd-dj.module';
import { AngularModule } from './angular/angular.module';
import { ReactModule } from './react/react.module';

@Module({
  imports: [
    AngularModule,
    CrowdDjModule,
    ReactModule
  ],
  controllers: [],
  exports: [
    AngularModule,
    CrowdDjModule,
    ReactModule
  ]
})
export class FrontendControllersModule {}