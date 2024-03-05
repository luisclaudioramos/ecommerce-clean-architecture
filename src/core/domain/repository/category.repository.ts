import {Category} from "../models/categories/category";

export interface CategoryRepository {
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category>;
    findByName(name: string): Promise<Category>;
    create(category: Category): Promise<void>;
    update(category: Category): Promise<void>;
    delete(id: number): Promise<void>;
}