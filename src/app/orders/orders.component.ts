import { Component, OnInit } from '@angular/core';
import { Order } from '../core/models/order.model';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  constructor(private data: DataService) {
    this.data.getOrders(this.data.localOrders,(orders)=>{
      this.orders = orders;
      console.log(orders);
    })
  }
  getFullAddress(order: Order):string {
    return `${order.address}, ${order.province.name}, ${order.district.name}, ${order.ward.name}`
  }
  ngOnInit(): void {
  }

}
