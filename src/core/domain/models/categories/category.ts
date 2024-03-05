import {CategoryData} from "./category-data";

export class Category {
    id?: number;
    name: string;
    description: string;

    constructor(private readonly data: CategoryData) {
        this.name = data.name;
        this.description = data.description;
    }

    update(productData: CategoryData): void {
        this.name = productData.name;
        this.description = productData.description;
    }
}