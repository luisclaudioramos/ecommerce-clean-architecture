import * as Joi from "joi";

import ErrorModel from "../../../core/utils/error.model";
import ValidatorModel from "../../../core/utils/validator.model";
import ProductModel from "../../../core/domain/models/products/product.model";

import ProductCreateValidatorProvider from "../../../core/domain/providers/product-create-validator.provider";
import ValidationJoiMapper from "../../utils/validation-joi.mapper";

export default class ProductCreateJoiValidatorProvider extends ProductCreateValidatorProvider {

    private readonly adapter = new ValidationJoiMapper();

    private schema = Joi.object({
        id: Joi.optional(),
        name: Joi.string().required().min(3).max(255),
        description: Joi.string().required().min(10).max(1000),
        price: Joi.number().required().min(0).max(10000),
        quantityInStock: Joi.number().required().min(0).max(10000),
        categoryId: Joi.number().required().min(0).max(10000),
        type: Joi.number().required()
    });

    validate(product: ProductModel): ValidatorModel {
        const {value, error} = this.schema.validate(product, {
            abortEarly: false
        });

        let e: ErrorModel | ErrorModel[] | null = this.adapter.mapFrom(error?.details);

        const validation = new ValidatorModel()
        validation.value = value;
        validation.error = e;

        return validation
    }
}