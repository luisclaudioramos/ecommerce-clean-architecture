export default class ResponseModel<T> {
  public success: boolean;
  public data?: T;
  public page?: number;
  public pageSize?: number;
  public total?: number;
  public error?: any;
}
