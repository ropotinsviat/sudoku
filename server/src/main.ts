import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import config from './config';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

async function start() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(config.appConfig.cors);

  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(config.appConfig.port, () =>
    console.log(`🚀 Server listening on port ${config.appConfig.port}`),
  );
}

start();

// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
// nest start --watch
