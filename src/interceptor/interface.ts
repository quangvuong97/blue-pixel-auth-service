import { EdPermission } from '../common/applicationType';

export enum AuthType {
  INTERNAL = 1,
  CLIENT = 2,
}

export class AuthContext {
  userId: string;

  userName: string;

  authorities: string[];

  authType?: AuthType;

  constructor(userId: string, userName: string, authoritiesString: string, authType?: AuthType) {
    this.userId = userId;
    this.userName = userName;
    this.authorities = authoritiesString?.split(',').map((s) => s.trim());
    this.authType = authType;
  }

  hasAuthority(authority: EdPermission): boolean {
    if (this.authType === AuthType.INTERNAL) {
      return true;
    }
    return this.authorities.some((x) => x === authority);
  }
}
