import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import * as rateLimit from 'express-rate-limit';
import { join } from 'path';
import { Request } from 'express';
import { AppModule } from './app/app.module';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  
  app.use(bodyParser.json());

  app.use((req: Request, res, next) => {
    // const allowedOrigins = ['http://localhost:8080', 'https://accounts.spotify.com'];
    // const origin = req.headers.referer;
    // console.log(req.headers);
    // console.log('origin', origin);
    // if (allowedOrigins.indexOf(origin) > -1) {
    //   res.setHeader('Access-Control-Allow-Origin', origin);
    // }
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
  })

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