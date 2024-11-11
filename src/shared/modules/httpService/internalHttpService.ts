import { AsyncLocalStorage } from 'async_hooks';

import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosInstance } from 'axios';
import { CHeaderFields, EEnvConfig } from 'src/common/constants';
import { AuthContext } from 'src/interceptor/interface';

import { AXIOS_PROVIDER } from './types';

@Injectable()
export class InternalHttpService extends HttpService {
  constructor(
    @Inject(AXIOS_PROVIDER.INTERNAL) override instance: AxiosInstance,
    private readonly configService: ConfigService,
    private readonly als: AsyncLocalStorage<AuthContext>,
  ) {
    super(instance);
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        Logger.log(
          {
            url: error.config.url,
            method: error.config.method,
            headers: error.config.headers,
            params: error.config.params,
          },
          'Error when call',
        );
        Logger.log(
          {
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
            error,
          },
          'With response',
        );
        return Promise.reject(error);
      },
    );
    instance.interceptors.request.use((config) => {
      if (config.params) {
        Object.keys(config.params).forEach((param) => {
          if (Array.isArray(config.params[param])) {
            config.params[param] = config.params[param].join(',');
          }
        });
      }

      const internalUsername = this.configService.get(EEnvConfig.INTERNAL_USERNAME);
      const internalPassword = this.configService.get(EEnvConfig.INTERNAL_PASSWORD);
      const authContext = this.als.getStore();

      config.headers[CHeaderFields.AUTHORIZATION] =
        `Basic ${Buffer.from(`${internalUsername}:${internalPassword}`).toString('base64')}`;
      if (!authContext) {
        return config;
      }

      config.headers[CHeaderFields.USER_ID] = authContext.userId;
      config.headers[CHeaderFields.USER_NAME] = authContext.userName;
      config.headers[CHeaderFields.AUTHORITIES] = config.headers[CHeaderFields.AUTHORITIES]
        ? config.headers[CHeaderFields.AUTHORITIES]
        : authContext.authorities;
      return config;
    });
  }
}
