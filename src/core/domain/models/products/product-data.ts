import {ProductType} from "../../enum/product-type";

export interface ProductData {
    name: string;
    description: string;
    price: number;
    quantityInStock: number;
    categoryId: number;
    type: ProductType;
}