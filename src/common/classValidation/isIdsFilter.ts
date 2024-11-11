import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsArray, IsInt, IsOptional, Min } from 'class-validator';

import { TransformUtils } from '../utils/transform.utils';

export function IsIdsFilter(isOptional = true) {
  const result = applyDecorators(
    ApiProperty({ type: [Number], required: !isOptional }),
    IsArray(),
    IsInt({ each: true }),
    Min(1, { each: true }),
    Transform((params: TransformFnParams) => TransformUtils.stringToNumbers(params.value)),
  );
  if (isOptional) return applyDecorators(IsOptional(), result);
  return result;
}
