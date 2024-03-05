import {Request, Response, Router} from "express";
import ProductController from "./product/product.controller";

const routers = Router();

const productController = new ProductController()

routers.route('/products')
    .post((request: Request, response: Response) => productController.create(request, response))
    .get((request: Request, response: Response) => productController.find(request, response));

export default routers;