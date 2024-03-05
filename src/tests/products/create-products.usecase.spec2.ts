// import ProductModel from "../../core/domain/models/products/product.model";
// import {ProductType} from "../../core/domain/enum/product-type";
//
// import CreateProductUseCase from "../../core/domain/usecases/product/create-products.usecase";
//
// import ProductPgRepository from "../../api/product/repository/product-pg-repository";
// import ProductCreateJoiValidatorProvider from "../../api/product/providers/product-create-joi-validator.provider";
//
// describe('CreateProductUseCase', () => {
//
//     it('must create a successful product', async () => {
//         // Arrange
//         const productRepository = new ProductPgRepository();
//         const productCreateJoiValidatorProvider = new ProductCreateJoiValidatorProvider();
//
//         const createProductUseCase = new CreateProductUseCase(
//             productRepository,
//             productCreateJoiValidatorProvider
//         );
//
//         const productData = new ProductModel();
//
//         productData.name = 'Product X';
//         productData.description = 'Description of product X';
//         productData.price = 100.00;
//         productData.quantityInStock = 10;
//         productData.categoryId = 1;
//         productData.type = ProductType.Physical;
//
//         // Act
//         const product = await createProductUseCase.execute(productData);
//
//         // Assert
//         expect(product).toBeDefined();
//         expect(product.name).toBe(productData.name);
//         expect(product.description).toBe(productData.description);
//         // expect(product.price).toBe(productData.price);
//
//         // Verificação adicional
//         // const productInRepository = await productRepository.findById(product.id);
//         // expect(productInRepository).toBeDefined();
//         // expect(productInRepository.name).toBe(productData.name);
//         // expect(productInRepository.description).toBe(productData.description);
//         // expect(productInRepository.price).toBe(productData.price);
//     });
// });