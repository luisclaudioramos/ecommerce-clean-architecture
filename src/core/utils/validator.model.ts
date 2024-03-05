import ErrorModel from "./error.model";

export default class ValidatorModel {
  public value: any;
  public error: ErrorModel | ErrorModel[] | null
}
