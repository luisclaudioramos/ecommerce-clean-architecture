import {Mapper} from "../../../core/utils/mapper";

import ProductModel from "../../../core/domain/models/products/product.model";
import ProductDbEntity from "../entities/product-db.entity";

export default class ProductsDbMapper extends Mapper<ProductDbEntity, ProductModel> {

    mapFrom(param: ProductDbEntity): ProductModel {
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

    mapTo(param: ProductModel): ProductDbEntity {
        return {
            id: param.id,
            name: param.name,
            description: param.description,
            price: param.price,
            quantityInStock: param.quantityInStock,
            categoryId: param.categoryId,
            type: param.type
        } as ProductDbEntity;
    }
}
