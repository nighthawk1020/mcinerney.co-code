import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '../','angular'));
  app.useStaticAssets(join(__dirname, '../','react'));
  app.useStaticAssets(join(__dirname, '../','crowd-dj'));

  await app.listen(process.env.PORT || '8080');
}
bootstrap();