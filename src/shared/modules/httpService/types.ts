export interface ResponseWrapper<T> {
  code: string;
  data: T;
  message: string;
  totalElements: number;
}

export enum AXIOS_PROVIDER {
  INTERNAL = 'INTERNAL_INSTANCE_TOKEN',
  EXTERNAL = 'EXTERNAL_INSTANCE_TOKEN',
}
