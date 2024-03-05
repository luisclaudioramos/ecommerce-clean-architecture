import { ProductType } from "../../enum/product-type";

export default class ProductModel {
    id?: number;
    name: string;
    description: string;
    price: number;
    quantityInStock: number;
    categoryId: number;
    type: ProductType;
}