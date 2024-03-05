import Validator from "../../utils/validator";

import ProductModel from "../models/products/product.model";

export default abstract class ProductCreateValidatorProvider implements Validator<ProductModel, any> {
    abstract validate(params: ProductModel): any;
}
