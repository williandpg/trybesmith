export type ServiceResponse<T> = {
  status: number;
  data: T | { message: string };
  message?:string
};