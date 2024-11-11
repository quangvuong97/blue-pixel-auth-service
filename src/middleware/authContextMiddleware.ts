import { AsyncLocalStorage } from 'async_hooks';

import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
import { CHeaderFields, EEnvConfig } from 'src/common/constants';

import { AuthContext, AuthType } from '../interceptor/interface';

@Injectable()
export class AuthContextMiddleware implements NestMiddleware {
  constructor(
    private readonly als: AsyncLocalStorage<AuthContext>,
    private readonly configService: ConfigService,
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    const [type, token] = req.headers.authorization?.split(' ') || ['', ''];
    let authData: AuthType | null = null;
    const tokenString = Buffer.from(token, 'base64').toString();
    if (type === 'Basic') {
      const basicInternalToken = `${this.configService.get(EEnvConfig.INTERNAL_USERNAME)}:${this.configService.get(EEnvConfig.INTERNAL_PASSWORD)}`;
      const basicClientToken = `${this.configService.get(EEnvConfig.CLIENT_USERNAME)}:${this.configService.get(EEnvConfig.CLIENT_PASSWORD)}`;

      if (tokenString === basicInternalToken) {
        authData = AuthType.INTERNAL;
      }
      if (tokenString === basicClientToken) {
        authData = AuthType.CLIENT;
      }
    }
    if (!authData) next(new UnauthorizedException('Token invalid!'));

    const authContext: AuthContext = new AuthContext(
      req.header(CHeaderFields.USER_ID) || '',
      req.header(CHeaderFields.USER_NAME) || '',
      req.headers[CHeaderFields.AUTHORITIES] as string,
      authData,
    );
    this.als.run(authContext, () => {
      next();
    });
  }
}
