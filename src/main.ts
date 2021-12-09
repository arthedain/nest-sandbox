import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const env = require('dotenv').config();
const mongoose = require('mongoose');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
