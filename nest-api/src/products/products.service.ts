import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService{

    products: Product[] = [];
    
    insertProduct(title: string, desc: string, price: number): string {
        const prodId = Math.floor(Math.random() * 10000).toString();
        const newProduct = new Product(prodId, title, desc, price)
        this.products.push(newProduct);
        return prodId;

    }
    getProducts(){
        return [...this.products];
        // the square brackets are used for avoiding sendinga memory reference
        // this way we send a copy of the object,
        // to avoid having an array inside an array, we use the spread operator
    }

    getSingleProduct(productId: string){
        const product = this.products.find((prod)=> prod.id === productId);
        if( !product){
            throw new NotFoundException('Could not find product ');
        }
        return {...product}
        // create a new object, take the old key-value pairs from the object
        // and add them as new key-value pairs of the object
    }
}