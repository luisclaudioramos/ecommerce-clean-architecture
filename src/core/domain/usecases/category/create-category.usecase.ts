import UseCase from "../../../utils/use-case";

import {Category} from "../../models/categories/category";
import {CategoryData} from "../../models/categories/category-data";

import {CategoryRepository} from "../../repository/category.repository";

export class CreateCategoryUseCase implements UseCase<CategoryData, Promise<Category>> {

    constructor(private readonly categoryRepository: CategoryRepository) {}

    async execute(categoryData: CategoryData): Promise<Category> {
        const category = new Category(categoryData);

        await this.categoryRepository.create(category);

        return category;
    }
}