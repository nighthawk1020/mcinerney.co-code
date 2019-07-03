import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { Response } from 'express';
import * as rateLimit from 'express-rate-limit';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.enableCors();

  app.useStaticAssets(join(__dirname, '../','angular'));
  app.useStaticAssets(join(__dirname, '../','react'));
  app.useStaticAssets(join(__dirname, '../','crowd-dj'));

  app.use(
    rateLimit(
      {
        windowMs: 60 * 1000,
        max: 100
      }
    )
  )

  await app.listen(process.env.PORT || '8080');
}
bootstrap();