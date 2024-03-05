import ResponseModel from "../../../core/utils/response.model";

import ProductModel from "../../../core/domain/models/products/product.model";

import ProductRepository from "../../../core/domain/repository/product.repository";

import ProductsDbMapper from "../mappers/products-db.mapper";
import PgConnection from "../../../external/database/pg-connection";
import ProductsQuery from "../../../core/domain/models/products/products-query";
import ResponseRegisterModel from "../../../core/utils/response-register.model";

export default class ProductPgRepository implements ProductRepository {

    private readonly db: PgConnection = new PgConnection();
    private readonly adapter: ProductsDbMapper = new ProductsDbMapper();

    constructor() {
    }

    async findAll(params: ProductsQuery): Promise<ResponseModel<ProductModel[]>> {
        try {
            const limit = params.pageSize ? params.pageSize : 5;
            const page = params.page ? params.page : 1;
            const offset = (page - 1) * limit;

            const query = 'SELECT * FROM products WHERE name = "geladeira" limit ' + limit +' offset ' + offset;

            const results = await this.db.query(query);

            const products = results.rows.map((row) => this.adapter.mapFrom(row));

            const totalProducts = await this.db.query('SELECT COUNT(*) FROM products WHERE name = "geladeira"');

            const responseModel = new ResponseModel<ProductModel[]>();

            responseModel.success = true;
            responseModel.data = products;
            responseModel.page = offset;
            responseModel.pageSize = limit;
            responseModel.total = totalProducts.rows[0].count;

            return responseModel;

        } catch (error: any) {

            const errors = new ResponseModel<ProductModel[]>();

            errors.success = false;
            errors.error = error;

            return errors;

        }
    }

    async findById(id: number): Promise<ProductModel> {
        const result = await this.db.query('SELECT * FROM products WHERE id = $1', [id]);
        // if (result.rowCount === 0) {
        //     return undefined;
        // }
        return this.adapter.mapFrom(result.rows[0]);
    }

    async findByName(name: string): Promise<ProductModel[]> {
        const results = await this.db.query('SELECT * FROM products');
        return results.rows.map((row) => this.adapter.mapFrom(row));
    }

    async findByCategoryId(categoryId: number): Promise<ProductModel[]> {
        const results = await this.db.query('SELECT * FROM products');
        return results.rows.map((row) => this.adapter.mapFrom(row));
    }

    async create(product: ProductModel): Promise<ResponseRegisterModel<ProductModel, any>> {
        try {
            const result = await this.db.query(
                `INSERT INTO products (name, description, price, quantity_in_stock, category_id, type)
           VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                [
                    product.name,
                    product.description,
                    product.price,
                    product.quantityInStock,
                    product.categoryId,
                    product.type,
                ],
            );

            const response = new ResponseRegisterModel<ProductModel, any>();

            response.success = true;
            response.data = this.adapter.mapFrom(result.rows[0]);

            return response;
        } catch (error: any) {

            const errors = new ResponseRegisterModel<ProductModel, any>();

            errors.success = false;
            errors.error = error;

            return errors;

        }
    }

    async update(product: ProductModel): Promise<ProductModel> {
        const result = await this.db.query(
            `INSERT INTO products (name, description, price, quantity_in_stock, category_id, type)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [
                product.name,
                product.description,
                product.price,
                product.quantityInStock,
                product.categoryId,
                product.type,
            ],
        );

        return this.adapter.mapFrom(result.rows[0]);
    }

    async delete(id: number): Promise<number> {
        return Promise.resolve(5);
    }

}