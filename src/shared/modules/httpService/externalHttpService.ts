import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { AxiosInstance } from 'axios';

import { AXIOS_PROVIDER } from './types';

@Injectable()
export class ExternalHttpService extends HttpService {
  constructor(@Inject(AXIOS_PROVIDER.EXTERNAL) override instance: AxiosInstance) {
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
      return config;
    });
  }
}
