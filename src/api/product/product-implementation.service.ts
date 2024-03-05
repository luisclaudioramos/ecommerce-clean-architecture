import ResponseModel from "../../core/utils/response.model";
import ResponseRegisterModel from "../../core/utils/response-register.model";

import ProductModel from "../../core/domain/models/products/product.model";

import GetProductsUseCase from "../../core/domain/usecases/product/get-products.usecase";
import CreateProductUseCase from "../../core/domain/usecases/product/create-products.usecase";

import ProductRepository from "../../core/domain/repository/product.repository";
import ProductPgRepository from "./repository/product-pg-repository";

import ProductsFrontendMapper from "./mappers/products-frontend.mapper";
import ProductQueryParamsFrontendEntity from "./entities/product-query-params-frontend.entity";
import ProductsQueryParamsFrontendMapper from "./mappers/products-query-params-frontend.mapper";

import ProductCreateValidatorProvider from "../../core/domain/providers/product-create-validator.provider";
import ProductCreateJoiValidatorProvider from "./providers/product-create-joi-validator.provider";
import ValidatorModel from "../../core/utils/validator.model";

export default class ProductImplementationService {

    private readonly productRepository: ProductRepository = new ProductPgRepository();
    private readonly productFrontendMapper: ProductsFrontendMapper = new ProductsFrontendMapper();
    private readonly productsQueryParamsFrontendMapper: ProductsQueryParamsFrontendMapper = new ProductsQueryParamsFrontendMapper()
    private readonly productCreateValidatorProvider: ProductCreateValidatorProvider = new ProductCreateJoiValidatorProvider()

    constructor() {}

    async getProducts(params: ProductQueryParamsFrontendEntity): Promise<ResponseModel<ProductModel[]>> {
        const getProductsUseCase = new GetProductsUseCase(this.productRepository);

        const queryParams = this.productsQueryParamsFrontendMapper.mapFrom(params);

        return await getProductsUseCase.execute(queryParams);
    }

    async createProduct(product: any): Promise<ResponseRegisterModel<ProductModel, ValidatorModel>> {

        const new_product = this.productFrontendMapper.mapFrom(product);

        const createProductUseCase = new CreateProductUseCase(
            this.productRepository,
            this.productCreateValidatorProvider
        );

        return await createProductUseCase.execute(new_product);
    }
}