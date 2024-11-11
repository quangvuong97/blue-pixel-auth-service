export class TransformUtils {
  static stringToEnum<T>(value: string, enumObject: T, each?: boolean): T[keyof T] | T[keyof T][] | null {
    if (!value) return null;
    return each
      ? value
          .toString()
          .split(',')
          .map(
            (e: string) => (enumObject as unknown as { [key: string]: T[keyof T] })[e.toString().toLocaleUpperCase()],
          )
      : (enumObject as unknown as { [key: string]: T[keyof T] })[value.toString().toLocaleUpperCase()];
  }

  static enumToStrings<T>(enumObject: T) {
    return Object.keys(enumObject as object)
      .filter((key) => Number.isNaN(Number(key)))
      .map((key: string) => key.toLocaleLowerCase());
  }

  static stringToNumbers(value: string, separator: string = ','): number[] | null {
    if (!value) return null;
    return value
      .toString()
      .split(separator)
      .map((e: string) => Number(e));
  }

  static stringToArrays(value: string, separator: string = ','): string[] | null {
    if (!value) return null;
    return value
      .toString()
      .split(separator)
      .map((e: string) => e);
  }

  static enumToString<T>(enumObject: T, value: T[keyof T]): string {
    return enumObject[value as keyof T]?.toString().toLocaleLowerCase() || '';
  }
}
