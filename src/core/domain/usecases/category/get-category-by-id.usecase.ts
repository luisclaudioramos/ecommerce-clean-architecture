import UseCase from "../../../utils/use-case";

import {Category} from "../../models/categories/category";

import {CategoryRepository} from "../../repository/category.repository";

export class GetCategoryByIdUseCase implements UseCase<number, Promise<Category>> {

    constructor(private readonly categoryRepository: CategoryRepository) {}

    async execute(id: number): Promise<Category> {
        const category = await this.categoryRepository.findById(id);

        if (!category) {
            throw new Error('Category not found');
        }

        return category;
    }
}