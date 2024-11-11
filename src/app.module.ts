import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { DatabaseModule } from './database/database.module';
import { RequestInterceptor } from './interceptor/requestInterceptor.filter';
import { MiddlewareModule } from './middleware/middleware.module';
import { AuthModule } from './modules/auth/auth.module';
import { HealthModule } from './modules/healthCheck/health.module';
import { AsyncLocalStorageModule } from './shared/modules/asyncLocalStorage/AsyncLocalStorageModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', `.env.${process.env.NODE_ENV || 'development'}`],
      isGlobal: true,
    }),
    MiddlewareModule,
    AsyncLocalStorageModule,
    DatabaseModule,
    AuthModule,
    HealthModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestInterceptor,
    },
  ],
})
export class AppModule {}
