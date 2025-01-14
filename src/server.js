import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import { env } from './utils/env.js';
import router from './routers/index.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import { swaggerDocs } from './middlewares/swaggerDocs.js';

dotenv.config();

const PORT = env('PORT', '3000');

export const setupServer = () => {
  const app = express();

  app.use(cookieParser());
  app.use(express.json());
  app.use(
    cors({
      origin: 'https://e-pharmacy-client-five.vercel.app',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    }),
  );

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(router);
  app.use('/api-docs', swaggerDocs());
  app.use('*', notFoundHandler);
  app.use(errorHandler);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
