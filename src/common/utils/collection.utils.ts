import { Leaves } from './type.utils';

export class CollectionUtils {
  static toPartitions<T>(size: number) {
    return (resultArray: T[][], item: T, index: number) => {
      const chunkIndex = Math.floor(index / size);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    };
  }

  static shuffle<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  static reduce<T>(input: T[], keysReduce: Leaves<T>[]): { [key: string]: T };
  static reduce<T, K extends Leaves<T>>(
    input: T[],
    keysReduce: Leaves<T>[],
    keysReturn: K,
  ): { [key: string]: K extends keyof T ? T[K] : never };
  static reduce<T, K extends Array<Leaves<T>>>(
    input: T[],
    keysReduce: Leaves<T>[],
    keysReturn: K,
  ): { [key: string]: { [P in K[number]]: P extends keyof T ? T[P] : never } };
  static reduce<T, K extends Leaves<T>>(input: T[], keysReduce: Leaves<T>[], keysReturn?: K | K[]) {
    if (!keysReturn) {
      return input.reduce<{ [key: string]: T }>(
        (pre, cur) => ({
          ...pre,
          [keysReduce.map((keyReduce) => cur[keyReduce.toString()]).join('_')]: cur,
        }),
        {},
      );
    }
    if (Array.isArray(keysReturn)) {
      return input.reduce((pre, cur) => {
        const result = {};
        keysReturn.forEach((keyReturn) => {
          result[keyReturn.toString()] = cur[keyReturn.toString()];
        });
        return {
          ...pre,
          [keysReduce.map((keyReduce) => cur[keyReduce.toString()]).join('_')]: result,
        };
      }, {});
    }
    return input.reduce<{ [key: string]: K }>(
      (pre, cur) => ({
        ...pre,
        [keysReduce.map((keyReduce) => cur[keyReduce.toString()]).join('_')]: cur[keysReturn.toString()],
      }),
      {},
    );
  }
}
