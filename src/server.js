import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { env } from './utils/env.js';

import contactsRouter from './routers/contacts.js';
import router from './routers/index.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

import cookieParser from 'cookie-parser';

const PORT = Number(env('PORT'));

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.use(router);

  app.use(contactsRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
