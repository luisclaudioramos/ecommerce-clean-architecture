import {Request, Response} from "express";
import ProductImplementationService from "./product-implementation.service";

export default class ProductController {

    private readonly productImplementationService: ProductImplementationService = new ProductImplementationService();

    public async find(request: Request, response: Response) {
        const {body} = request;

        try {
            const result = await this.productImplementationService.getProducts(body);

            if (!result.success) {
                return response.status(400).send(result);
            }
            response.status(201).send(result);

        } catch (error: any) {
            console.log('------------------')
            console.log(error)
            response.status(500).send(error);
        }

    }

    public async create(request: Request, response: Response) {
        const {body} = request;

        if (body && Object.keys(body).length === 0) {
            return response.status(400).send();
        }

        try {
            const result = await this.productImplementationService.createProduct(body);

            if (!result.success) {
                return response.status(400).send(result);
            }
            return response.status(201).send(result);
        } catch (error: any) {
            console.log('------------------')
            console.log(error)
            response.status(500).send(error);
        }
    }

}