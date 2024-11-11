import { Inject, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DynamicModule, RouteInfo } from '@nestjs/common/interfaces';
import { APP_GUARD } from '@nestjs/core';
import { AsyncLocalStorageModule } from 'src/shared/modules/asyncLocalStorage/AsyncLocalStorageModule';

import { AuthContextMiddleware } from './authContextMiddleware';
import { RolesGuard } from './roles.guard';

export interface MiddlewareModuleOptions {
  excludePath?: (string | RouteInfo)[];
}

export const MIDDLEWARE_MODULE_OPTIONS_PROVIDER = 'MIDDLEWARE_MODULE_OPTIONS_PROVIDER';

@Module({
  imports: [AsyncLocalStorageModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: MIDDLEWARE_MODULE_OPTIONS_PROVIDER,
      useValue: {},
    },
  ],
  exports: [],
})
export class MiddlewareModule implements NestModule {
  private options: MiddlewareModuleOptions;

  constructor(@Inject(MIDDLEWARE_MODULE_OPTIONS_PROVIDER) private middlewareModuleOptions: MiddlewareModuleOptions) {
    this.options = middlewareModuleOptions;
    this.options.excludePath = this.options.excludePath || [];
  }

  static forRoot(options: MiddlewareModuleOptions): DynamicModule {
    return {
      module: MiddlewareModule,
      providers: [
        {
          provide: APP_GUARD,
          useClass: RolesGuard,
        },
        {
          provide: MIDDLEWARE_MODULE_OPTIONS_PROVIDER,
          useValue: options,
        },
      ],
      exports: [MIDDLEWARE_MODULE_OPTIONS_PROVIDER],
      imports: [AsyncLocalStorageModule],
    };
  }

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthContextMiddleware)
      .exclude(...this.options.excludePath!)
      .forRoutes('*');
  }
}
