import UseCase from "../../../utils/use-case";

import ProductModel from "../../models/products/product.model";
import {ProductData} from "../../models/products/product-data";

import ProductRepository from "../../repository/product.repository";

export class UpdateProductUseCase implements UseCase<{id: number, productData: ProductData}, Promise<ProductModel>> {

    constructor(private readonly productRepository: ProductRepository) {}

    async execute(params: {id: number, productData: ProductData}): Promise<ProductModel> {
        const product = await this.productRepository.findById(params.id);

        if (!product) {
            throw new Error('Product not found');
        }

        //product.update(params.productData);

        await this.productRepository.update(product);

        return product;
    }
}