import ResponseModel from "../../utils/response.model";

import ProductModel from "../models/products/product.model";
import ProductsQuery from "../models/products/products-query";
import ResponseRegisterModel from "../../utils/response-register.model";

export default interface ProductRepository {
    findAll(query: ProductsQuery): Promise<ResponseModel<ProductModel[]>>;
    findById(id: number): Promise<ProductModel>;
    findByName(name: string): Promise<ProductModel[]>;
    findByCategoryId(categoryId: number): Promise<ProductModel[]>;
    create(product: ProductModel): Promise<ResponseRegisterModel<ProductModel, any>>;
    update(product: ProductModel): Promise<ProductModel>;
    delete(id: number): Promise<number>;
}