import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import { Storage } from '@google-cloud/storage';

const storage = new Storage(
  {
    projectId: 'sturdy-landing-165622',
    keyFilename: join(__dirname, '..', 'project-key.json')
  }
);

storage
  .getBuckets()
  .then(results => {
    const buckets = results[0];
    
  })

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '../','website-code-angular'));
  app.useStaticAssets(join(__dirname, '../','website-code-react'));

  await app.listen(process.env.PORT || '3030');
}
bootstrap();