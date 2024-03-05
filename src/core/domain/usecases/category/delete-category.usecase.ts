import UseCase from "../../../utils/use-case";

import {CategoryRepository} from "../../repository/category.repository";

export class DeleteCategoryUseCase implements UseCase<number, Promise<void>> {

    constructor(private readonly categoryRepository: CategoryRepository) {}

    async execute(id: number): Promise<void> {
        const category = await this.categoryRepository.findById(id);

        if (!category) {
            throw new Error('Category not found');
        }

        await this.categoryRepository.delete(id);
    }
}