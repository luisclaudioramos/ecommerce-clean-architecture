import UseCase from "../../../utils/use-case";

import ProductRepository from "../../repository/product.repository";

export class DeleteProductUseCase implements UseCase<number, Promise<void>> {

    constructor(private readonly productRepository: ProductRepository) {}

    async execute(params: number): Promise<void> {
        const product = await this.productRepository.findById(params);

        if (!product) {
            throw new Error('Product not found');
        }

        await this.productRepository.delete(params);
    }
}