import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';

import { AppModule } from './app.module';
import { EEnvConfig } from './common/constants';
import { createLoggerOption } from './common/utils/utils';

const NAME_JOB = 'Authorization Service';

async function bootstrap() {
  const configService = new ConfigService();
  Object.values(EEnvConfig).forEach((key) => Logger.log(`${key} = ${configService.get(key)}`));

  const globalPrefix = 'v1';
  const port = configService.get(EEnvConfig.API_PORT) || 8003;

  const app = await NestFactory.create(AppModule, { logger: WinstonModule.createLogger(createLoggerOption(NAME_JOB)) });

  app.setGlobalPrefix(globalPrefix, { exclude: ['healthz'] });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('AUTHORIZATION SERVICE')
    .setDescription('AUTHORIZATION SERVICE')
    .setVersion('1.0.0')
    .addTag('AUTHORIZATION SERVICE')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {});

  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
