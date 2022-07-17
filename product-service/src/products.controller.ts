import { productList } from './products.mock';

interface Product {
    id: string,
    title: string,
    description: string,
    image: string,
    price: number,
    count: number,
    createdAt: string,
    lastModifiedAt: string
}

export class Products {

    products: Array<Product> = [...productList];

    async getById(id): Promise<Product> {
        const product = await this.products.find(res => res.id === id)
        if(!product){
            throw new Error('');
        }
        return product;
    }

    async getAll(): Promise<Array<Product>> {
        return await this.products;
    }
}
