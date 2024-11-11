import { HttpException, HttpStatus } from '@nestjs/common';

import { TransformUtils } from '../utils/transform.utils';

import { ErrorCodes } from './errorCode.enum';
import { ErrorMessages } from './errorMessage';

export class BadRequestException extends HttpException {
  constructor(errorCode: ErrorCodes | string) {
    super(
      {
        code: TransformUtils.enumToString(ErrorCodes, errorCode as ErrorCodes) || HttpStatus.BAD_REQUEST,
        message: ErrorMessages[errorCode] || errorCode,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
