export default interface ProductQueryParamsFrontendEntity {
    name?: string;
    categoryId?: number;
    minPrice?: number;
    maxPrice?: number;
    page?: number;
    pageSize?: number;
    total?: number;
}