import { Product } from "./product.model";
import { Spec } from "./spec.model";

export interface Address {
    name: string,
    code: string
}

export interface OrderData {
    amount: number,
    product: Product,
    spec: Spec,
    name: string,
    price: number,
    thumbnail: string,
    total: number
}

export interface Order {
    _id: string,
    customerName: string,
    data: OrderData[],
    timestamp: string,
    coupon?: string,
    phone: string,
    email?: string,
    province: Address,
    district: Address,
    ward: Address,
    address: string,
    status: number,
    total: number

}