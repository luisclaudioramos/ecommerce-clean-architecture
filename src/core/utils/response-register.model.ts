export default class ResponseRegisterModel<T, E> {
  public success: boolean;
  public data: T;
  public error: E;
}
