import UseCase from "../../../utils/use-case";

import ResponseModel from "../../../utils/response.model";
import ProductsQuery from "../../models/products/products-query";
import ProductModel from "../../models/products/product.model";

import ProductRepository from "../../repository/product.repository";

export default class GetProductsUseCase implements UseCase<ProductsQuery, Promise<ResponseModel<ProductModel[]>>> {

    constructor(private readonly productRepository: ProductRepository) {}

    async execute(params: ProductsQuery): Promise<ResponseModel<ProductModel[]>> {
        return await this.productRepository.findAll(params);
    }
}