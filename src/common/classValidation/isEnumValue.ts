import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import { ValidationOptions, registerDecorator, ValidationArguments } from 'class-validator';

import { TransformUtils } from '../utils/transform.utils';

export function IsEnumValue<T>(enumObject: T, validationOptions?: ValidationOptions & { excludeKeys?: string[] }) {
  return (object: object, propertyName: string) => {
    Transform((params: TransformFnParams) =>
      TransformUtils.stringToEnum(params.value, enumObject, validationOptions?.each),
    )(object, propertyName);
    registerDecorator({
      name: 'isEnumKeyAndTransform',
      target: object.constructor,
      propertyName,
      constraints: [enumObject],
      options: validationOptions,
      validator: {
        validate(value: number, args: ValidationArguments) {
          const [enumObj] = args.constraints;
          const excludeKeys = validationOptions?.excludeKeys
            ? validationOptions.excludeKeys.map((key) => enumObject[key])
            : [];
          const allowedKeys = Object.keys(enumObj)
            .filter((key) => Number.isInteger(Number(key)) && !excludeKeys.includes(Number(key)))
            .map((s) => Number(s));
          return allowedKeys.includes(value);
        },
        defaultMessage(args: ValidationArguments) {
          const [enumObj] = args.constraints;
          const excludeKeys = validationOptions?.excludeKeys || [];
          const allowedKeys = Object.keys(enumObj)
            .filter((key) => Number.isNaN(Number(key)) && !excludeKeys.includes(key))
            .map((s) => s.toLocaleLowerCase());
          return `${args.property} must be one of the following values: ${allowedKeys.join(', ')}`;
        },
      },
    });
  };
}

export function IsEnumValueApi<T>(enumObject: T, validationOptions?: ValidationOptions & { excludeKeys?: string[] }) {
  return applyDecorators(
    ApiProperty({
      enum: TransformUtils.enumToStrings(enumObject),
      isArray: validationOptions?.each,
    }),
    IsEnumValue(enumObject, validationOptions),
  );
}
