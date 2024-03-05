// import ProductModel from "../../core/domain/models/products/product.model";
// import {ProductType} from "../../core/domain/enum/product-type";
// import ProductImplementationService from "../../api/product/product-implementation.service";
//
// describe('GetProductUseCase', () => {
//
//     let productImplementationService: ProductImplementationService;
//
//     beforeEach(() => {
//         productImplementationService = new ProductImplementationService();
//     });
//
//     it('should return product when found', async () => {
//         const result1 = await productImplementationService.getProducts({});
//
//         const product = await productImplementationService.createProduct(new ProductModel({
//             name: 'Product X',
//             description: 'Description of product X',
//             price: 100.00,
//             quantityInStock: 10,
//             categoryId: 1,
//             type: ProductType.Physical,
//         }));
//
//         const result = await productImplementationService.getProducts({});
//
//         expect(result1.total).toBeLessThan(result && result.total ? result.total : 0);
//     }, 500000);
//
// });