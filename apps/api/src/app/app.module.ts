import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { StaticFileMiddleware } from './middleware/static-file/static-file.middleware';
import { UrlService } from './services/url-service/url-service';
import { AngularController } from './frontend-controllers/angular/angular.controller';
import { CrowdDjController } from './frontend-controllers/crowd-dj/crowd-dj.controller';
import { ReactController } from './frontend-controllers/react/react.controller';
import { RouterModule } from 'nest-router';
import { routes } from './routes/routes';
import { ApiModule } from './core/api/api.module';
import { CrowdDjModule } from './core/crowd-dj/crowd-dj.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ApiModule,
    CrowdDjModule
  ],
  controllers: [
    AngularController,
    CrowdDjController,
    ReactController
  ],
  providers: [
    UrlService
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(StaticFileMiddleware)
    .forRoutes(
      {
        path: '/**',
        method: RequestMethod.ALL
      }
    );
  }
}
