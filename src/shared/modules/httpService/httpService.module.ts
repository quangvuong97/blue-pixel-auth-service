import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import axios from 'axios';

import { AsyncLocalStorageModule } from '../asyncLocalStorage/AsyncLocalStorageModule';

import { ExternalHttpService } from './externalHttpService';
import { InternalHttpService } from './internalHttpService';
import { AXIOS_PROVIDER } from './types';

@Module({
  imports: [HttpModule, AsyncLocalStorageModule],
  providers: [
    {
      provide: AXIOS_PROVIDER.INTERNAL,
      useFactory: () => axios.create(),
    },
    {
      provide: AXIOS_PROVIDER.EXTERNAL,
      useFactory: () => axios.create(),
    },
    InternalHttpService,
    ExternalHttpService,
  ],
  exports: [InternalHttpService, ExternalHttpService],
})
export class HttpServiceModule {}
