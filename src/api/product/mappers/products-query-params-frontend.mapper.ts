import {Mapper} from "../../../core/utils/mapper";

import ProductsQuery from "../../../core/domain/models/products/products-query";
import ProductQueryParamsFrontendEntity from "../entities/product-query-params-frontend.entity";

export default class ProductsQueryParamsFrontendMapper extends Mapper<ProductQueryParamsFrontendEntity, ProductsQuery> {

    mapFrom(param: ProductQueryParamsFrontendEntity): ProductsQuery {
        return {
            name: param.name,
            categoryId: param.categoryId,
            minPrice: param.minPrice,
            maxPrice: param.maxPrice,
            page: param.page,
            pageSize: param.pageSize,
            total: param.total
        } as ProductsQuery;
    }

    mapTo(param: ProductsQuery): ProductQueryParamsFrontendEntity {
        return {
            name: param.name,
            categoryId: param.categoryId,
            minPrice: param.minPrice,
            maxPrice: param.maxPrice,
            page: param.page,
            pageSize: param.pageSize,
            total: param.total
        } as ProductQueryParamsFrontendEntity;
    }
}
