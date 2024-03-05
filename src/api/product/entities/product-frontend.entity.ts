import {ProductType} from "../../../core/domain/enum/product-type";

export default interface ProductFrontendEntity {
    id?: number;
    name: string;
    description: string;
    price: number;
    quantityInStock: number;
    categoryId: number;
    type: ProductType;
}