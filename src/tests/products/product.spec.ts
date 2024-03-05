import {ProductType} from "../../core/domain/enum/product-type";

describe("POST /products:", () => {

    describe("When product data is invalid", () => {

        it("returns 400", async () => {
            let statusCode = 400;
            const data = {};

            await fetch("http://localhost:4000/products", {
                method: "POST",
                body: JSON.stringify(data)
            }).then(response => {
                statusCode = response.status;
            });

            expect(statusCode).toEqual(400);
        });

        it("returns the keys in error", async () => {
            let statusCode = 200;
            const data = {
                name: null,
                description: null,
                price: null,
                quantityInStock: null,
                categoryId: null,
                type: null
            };
            let result: any = null

            await fetch("http://localhost:4000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(response => {
                statusCode = response.status;
                return response.json();
            }).then(response => {
                result = response
            });

            const contextList = result.error.map((item: any) => item.fieldName);

            expect(statusCode).toEqual(400);
            expect(result.success).toEqual(false);

            expect(contextList).toContain("name");
            expect(contextList).toContain("description");
            expect(contextList).toContain("price");
            expect(contextList).toContain("quantityInStock");
            expect(contextList).toContain("categoryId");
            expect(contextList).toContain("type");
        });

        it("returns 201", async () => {
            let statusCode = 200;
            const data = {
                name: "tshirt",
                description: "tshirt to do sports",
                price: 20,
                quantityInStock: 40,
                categoryId: 1,
                type: ProductType.Physical
            };

            await fetch("http://localhost:4000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(response => {
                statusCode = response.status;
                return response.json();
            });
            expect(statusCode).toEqual(201);
        });

        it("returns the product", async () => {
            let statusCode = 200;
            const data = {
                name: "tshirt",
                description: "tshirt to do sports",
                price: 20,
                quantityInStock: 40,
                categoryId: 1,
                type: ProductType.Physical
            };
            let result: any = null

            await fetch("http://localhost:4000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(response => {
                statusCode = response.status;
                return response.json();
            }).then(response => result = response);

            expect(result.success).toEqual(true);
            expect(result.data.id).toBeDefined();
        });

    });
});