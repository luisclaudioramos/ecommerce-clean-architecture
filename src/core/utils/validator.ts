export default interface Validator<S, T> {
  validate(params: S): T;
}
