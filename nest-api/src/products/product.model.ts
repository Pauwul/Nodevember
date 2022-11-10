import { Injectable } from "@nestjs/common";


@Injectable()
export class Product {

    constructor(
        public id: string,
        public title: string,
        public description: string,
        public price: number){};
}