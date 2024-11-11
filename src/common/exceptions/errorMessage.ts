import { ErrorCodes } from './errorCode.enum';

export const ErrorMessages: Record<ErrorCodes, string> = {
  [ErrorCodes.LOGIN_FAILED]: 'Username or password is incorrect.',
};
