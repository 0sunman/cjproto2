import { IProductType } from "./product";

export interface IOrder{
    id:string;
    productList:IProductType[];
    address:string;
    price:number;
    createAt:Date;
  }