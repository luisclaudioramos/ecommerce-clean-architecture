import UseCase from "../../../utils/use-case";

import {Category} from "../../models/categories/category";
import {CategoryData} from "../../models/categories/category-data";

import {CategoryRepository} from "../../repository/category.repository";

export class UpdateCategoryUseCase implements UseCase<{id: number, categoryData: CategoryData}, Promise<Category>> {

    constructor(private readonly categoryRepository: CategoryRepository) {}

    async execute(params: { id: number, categoryData: CategoryData }): Promise<Category> {
        const category = await this.categoryRepository.findById(params.id);

        if (!category) {
            throw new Error('Category not found');
        }

        category.update(params.categoryData);

        await this.categoryRepository.update(category);

        return category;
    }
}