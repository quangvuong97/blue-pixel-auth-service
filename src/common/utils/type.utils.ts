/**
 * Chuyển đổi toàn bộ property của một depth object sang partial
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

/**
 * Trả về toàn bộ key của một object thành 1 template type
 * VD: {key1: string, key2: {key21: string, key22: string}}
 * => type = key1 | key2 | key2.key21 | key2.key22
 */
export type DepthLeaves<T> = T extends object
  ? {
      [K in keyof T]:
        | `${Exclude<K, symbol>}`
        | `${Exclude<K, symbol>}${DepthLeaves<T[K]> extends never ? '' : `.${DepthLeaves<T[K]>}`}`;
    }[keyof T]
  : never;

/**
 * Chọn 1 vài key của object làm template type
 * VD: {key1: string, key2: string, key3: string}
 * user PickKeyToType<T, key1 | key2>
 * => type = key1 | key2
 */
export type PickKeyToType<T, K extends keyof T> = {
  [P in keyof Pick<T, K>]: `${Exclude<P, symbol>}`;
}[keyof Pick<T, K>];

/**
 * Trả về toàn bộ key level 1 của một object thành 1 template type
 * VD: {key1: string, key2: {key21: string, key22: string}}
 * => type = key1 | key2
 */
export type Leaves<T> = { [K in keyof T]: `${Exclude<K, symbol>}` }[keyof T];

export class TypeUtils {
  static partialEnum<T extends Object>(enumObj: T, keys: (keyof T)[]): Partial<T> {
    const result: Partial<T> = {};
    keys.forEach((key) => {
      if (key in enumObj) {
        result[key] = enumObj[key];

        const key2 = enumObj[key] as keyof T;
        const value2 = key as T[keyof T];
        result[key2] = value2;
      }
    });
    return result;
  }

  static propertyOf<T>(name: keyof T) {
    return name;
  }
}
