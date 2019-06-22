import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '../','website-code-angular'));
  app.useStaticAssets(join(__dirname, '../','website-code-react'));

  await app.listen(process.env.PORT || '3030');
}
bootstrap();