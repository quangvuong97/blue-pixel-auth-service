import { AsyncLocalStorage } from 'async_hooks';

import { CanActivate, ExecutionContext, Injectable, SetMetadata } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { EEnvConfig } from 'src/common/constants';

import { EdPermission } from '../common/applicationType';
import { AuthContext, AuthType } from '../interceptor/interface';

export const ROLES_KEY = 'roles';
export const EdRoles = (...roles: EdPermission[]) => SetMetadata(ROLES_KEY, roles);

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly enableGuard: boolean;

  constructor(
    private reflector: Reflector,
    private readonly als: AsyncLocalStorage<AuthContext>,
    private readonly configService: ConfigService,
  ) {
    this.enableGuard = this.configService.get(EEnvConfig.ENABLE_ROLE_GUARD) === 'true';
  }

  canActivate(context: ExecutionContext): boolean {
    if (!this.enableGuard) {
      return true;
    }
    const requiredRoles = this.reflector.getAllAndOverride<EdPermission[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const authContext = this.als.getStore();
    if (authContext?.authType === AuthType.INTERNAL) {
      return true;
    }
    return requiredRoles.some((role) => {
      return authContext?.authorities?.includes(role.toString());
    });
  }
}
