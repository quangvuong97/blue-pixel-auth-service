export class CHeaderFields {
  static AUTHORIZATION = 'Authorization';

  static FIXED_HEADER_AUTHORIZATION = 'fixedHeaderAuthorization';

  static USER_ID = 'user_id';

  static AUTHORITIES = 'authorities';

  static USER_NAME = 'user_name';
}

export enum EEnvConfig {
  API_PORT = 'API_PORT',

  INTERNAL_USERNAME = 'INTERNAL_USERNAME',
  INTERNAL_PASSWORD = 'INTERNAL_PASSWORD',

  CLIENT_USERNAME = 'CLIENT_USERNAME',
  CLIENT_PASSWORD = 'CLIENT_PASSWORD',

  MONGODB_URI = 'MONGODB_URI',
  MONGODB_NAME = 'MONGODB_NAME',

  JWT_SECRET = 'JWT_SECRET',

  ENABLE_ROLE_GUARD = 'ENABLE_ROLE_GUARD',
}
