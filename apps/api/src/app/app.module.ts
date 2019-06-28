import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { RouterModule } from 'nest-router';

import { StaticFileMiddleware } from './middleware/static-file/static-file.middleware';
import { routes } from './routes/routes';
import { ApiModule } from './core/api/api.module';
import { FrontendControllersModule } from './frontend-controllers/frontend-controllers.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ServicesModule,
    ApiModule,
    FrontendControllersModule
  ],
  controllers: [],
  providers: []
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
