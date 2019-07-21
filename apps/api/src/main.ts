import * as bodyParser from 'body-parser';
import * as express from 'express';
import cors from 'cors';
import { join } from 'path';
import rateLimit from 'express-rate-limit';
import { StaticFileMiddleware } from './app/middleware/static-file/static-file.middleware';
import { configureApi } from './app/core/api/api.config';
import { ROUTE_PREFIX } from './app/routes/route-prefixes';
const router = express.Router();

require('dotenv').config();

const app = express();
app.use(cors())
  .use(bodyParser.json())
  .use(
    rateLimit(
      {
        windowMs: 60 * 1000,
        max: 100  
      }
    )
  ).use(express.static(join(__dirname, '..', 'angular')))
  .use(express.static(join(__dirname, '..', 'crowd-dj')))
  .use(express.static(join(__dirname, '..', 'react')))
  .use(StaticFileMiddleware)
  .use(ROUTE_PREFIX, router);

configureApi(router);
 
const port = process.env.PORT || 8080;

console.log('Listening on port: ' + port);

app.listen(port);
