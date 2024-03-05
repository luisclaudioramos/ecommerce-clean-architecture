import UseCase from "../../../utils/use-case";

import ProductModel from "../../models/products/product.model";

import ProductRepository from "../../repository/product.repository";

export class GetProductByIdUseCase implements UseCase<number, Promise<ProductModel>> {

    constructor(private readonly productRepository: ProductRepository) {}

    async execute(params: number): Promise<ProductModel> {
        const product = await this.productRepository.findById(params);

        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    }
}