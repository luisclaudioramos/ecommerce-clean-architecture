import express, {Router} from 'express';
import cors from 'cors';
import * as Joi from "joi";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const productSchema = Joi.object().keys({
    name: Joi.required(),
    price: Joi.required(),
    weight: Joi.required()
});

const routers = Router()

routers.post("/products", async (req, res) => {

    const {body} = req;

    if (body && Object.keys(body).length === 0) {
        return res.status(400).send();
    }

    const { error, value } = productSchema.validate(body, { abortEarly: false });
    if (error) {
        // const errorMessage = error.details.map(({ message, context }) => { message, context });
        // return res.status(400).send({ data: errorMessage });
        return res.status(400).send({ data: [] });
    }


    // const product = await Product.create(value);
    // res.set("Location", `/products/${product.id}`);
    res.status(201).send();
});

app.use(routers);

const port = 4000;

app.listen(port,() => {
    console.log('Servidor executando na porta: ' + port + '!')
});