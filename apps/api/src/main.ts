require('dotenv').config();

import * as bodyParser from 'body-parser';
import * as express from 'express';
import cors from 'cors';
import { join } from 'path';
import rateLimit from 'express-rate-limit';
import { StaticFileMiddleware } from './app/middleware/static-file/static-file.middleware';
import { ROUTE_PREFIX } from './app/routes/route-prefixes';
import { configureSocketIo } from './app/core/sockets/socket.io-config';
import { configureApi } from './app/core/api/api.config';

const router = express.Router();

const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

configureSocketIo(io);

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

const port = process.env.PORT || 8080;

configureApi(router);

console.log('Listening on port: ' + port);

app.listen(port);
