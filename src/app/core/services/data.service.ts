import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Post } from '../models/post.model';
import { Product } from '../models/product.model';
import { ApiService } from './api.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _product: Product|null = null;
  private _posts: Post[]|null = null;
  private _orders: Order[] = [];
  public currentOrder: Order;

  private readonly _placeholderOrder: Order = {
    _id: "",
    address: "",
    customerName: "",
    data: [],
    province: {code: "-1", name: ""},
    district: {code: "-1", name: ""},
    ward: {code: "-1", name: ""},
    phone: "",
    status: 0,
    timestamp: "",
    total: 0,
    email: "",
    coupon: ""
  }

  
  constructor(private Api: ApiService) {
    this.currentOrder = this.getOrderDraft();
  }

  getOrderDraft():Order {
    const data = localStorage.getItem("order")
    return data?JSON.parse(data):this.placeholderOrder;
  }
  saveOrderDraft() {
    localStorage.setItem("order", JSON.stringify(this.currentOrder));
  }
  deleteOrderDraft() {
    localStorage.removeItem("order");
  }
  public addLocalOrder(orderId: string) {
    let localdata = localStorage.getItem("localOrders");
    let _array:string[] = [];
    if (localdata) {
      _array = JSON.parse(localdata);
      _array.push(orderId);
    } else {
      _array = [orderId];
    }
    localStorage.setItem("localOrders", JSON.stringify(_array));

  }
  public get localOrders():string[] {
    let localdata = localStorage.getItem("localOrders");
    return localdata?JSON.parse(localdata):[];
  }

  public get placeholderOrder(): Order {
    return JSON.parse(JSON.stringify(this._placeholderOrder));
  }
  public getProduct(callback: (product: Product)=>any): void {
    if (this._product) {
      return callback(this._product);
    }
    this.Api.get("/api/products").subscribe({
      next: (data)=>{
        this._product = data[0];
        callback(data[0]);
      }
    })
  }
  public getPosts(callback: (posts: Post[])=>any): void {
    if (this._posts) {
      return callback(this._posts);
    }
    this.Api.get("/api/posts").subscribe({
      next: (data)=>{
        this._posts = data;
        callback(data);
      }
    })
  }
  public getOrders(orderIds: string[],callback: (orders: Order[])=>any): void {
    this._orders = [];
    orderIds.forEach(id => {
      this.Api.get("/api/order/"+id).subscribe({
        next: (data)=>{
          this._orders.push(data);
          if (this._orders.length == orderIds.length) {
            callback(this._orders);
          }
        }
      })
    })
  }
  public createOrder(callback:(order: Order)=>any) {
    this.Api.post("/api/order", this.currentOrder).subscribe({
      next: (data)=>{
          callback(data);
          this.addLocalOrder(data._id);
      }
    })
  }
}
