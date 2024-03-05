import UseCase from "../../../utils/use-case";

import {Category} from "../../models/categories/category";
import {CategoryRepository} from "../../repository/category.repository";

export class GetCategoryUseCase implements UseCase<void, Promise<Category[]>> {

    constructor(private readonly categoryRepository: CategoryRepository) {}

    async execute(): Promise<Category[]> {
        return await this.categoryRepository.findAll();
    }
}