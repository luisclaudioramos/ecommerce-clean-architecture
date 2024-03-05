import {Mapper} from "../../../core/utils/mapper";

import ProductModel from "../../../core/domain/models/products/product.model";
import ProductFrontendEntity from "../entities/product-frontend.entity";

export default class ProductsFrontendMapper extends Mapper<ProductFrontendEntity, ProductModel> {

    mapFrom(param: ProductFrontendEntity): ProductModel {
        return {
            id: param.id,
            name: param.name,
            description: param.description,
            price: param.price,
            quantityInStock: param.quantityInStock,
            categoryId: param.categoryId,
            type: param.type
        } as ProductModel;
    }

    mapTo(param: ProductModel): ProductFrontendEntity {
        return {
            id: param.id,
            name: param.name,
            description: param.description,
            price: param.price,
            quantityInStock: param.quantityInStock,
            categoryId: param.categoryId,
            type: param.type
        } as ProductFrontendEntity;
    }
}
