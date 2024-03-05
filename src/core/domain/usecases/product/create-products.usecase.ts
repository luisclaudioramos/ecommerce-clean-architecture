import UseCase from "../../../utils/use-case";
import ValidatorModel from "../../../utils/validator.model";

import ProductModel from "../../models/products/product.model";

import ProductRepository from "../../repository/product.repository";
import ProductCreateValidatorProvider from "../../providers/product-create-validator.provider";
import ResponseRegisterModel from "../../../utils/response-register.model";

export default class CreateProductUseCase implements UseCase<ProductModel, Promise<ResponseRegisterModel<ProductModel, ValidatorModel>>> {

    constructor(
        private readonly productRepository: ProductRepository,
        private readonly productValidatorProvider: ProductCreateValidatorProvider
    ) {}

    async execute(product: ProductModel): Promise<ResponseRegisterModel<ProductModel, ValidatorModel>> {
        const { value, error } = await this.productValidatorProvider.validate(product);

        if (error) {
            const errors = new ResponseRegisterModel<ProductModel, ValidatorModel>();

            errors.success = false;
            errors.error = error;

            return errors;
        }

        return await this.productRepository.create(value);
    }
}