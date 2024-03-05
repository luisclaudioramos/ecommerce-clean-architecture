export default interface ProductsQuery {
    name?: string;
    categoryId?: number;
    minPrice?: number;
    maxPrice?: number;
    page?: number;
    pageSize?: number;
    total?: number;
}