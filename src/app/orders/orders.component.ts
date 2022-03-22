import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order } from '../core/models/order.model';
import { DataService } from '../core/services/data.service';
import { SeoService } from '../core/services/seo.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  constructor(private data: DataService,public seo: SeoService) {
    this.data.getOrders(this.data.localOrders,(orders)=>{
      this.orders = orders;
      console.log(orders);
    })
    seo.updateTitle("ĐƠN HÀNG ĐÃ ĐẶT");
    seo.updateDescription("Mật Biển là những giọt mật kết tinh những gì tinh túy nhất của biển. Sự ngọt ngào của cá cơm tươi hòa quyện với sự đậm đà của muối biển. Từng giọt sánh quyện, ngưng tụ sau 12 tháng ấp ủ. Dưới bàn tay của nghệ nhân, từng giọt nước mắm được đảm bảo về chất lượng và chín muồi về hương vị.");
    seo.updateOpenGraph({
      description: "Mật Biển là những giọt mật kết tinh những gì tinh túy nhất của biển. Sự ngọt ngào của cá cơm tươi hòa quyện với sự đậm đà của muối biển. Từng giọt sánh quyện, ngưng tụ sau 12 tháng ấp ủ. Dưới bàn tay của nghệ nhân, từng giọt nước mắm được đảm bảo về chất lượng và chín muồi về hương vị.",
      image: environment.apiUrl+'/static/photo/bg.jpg',
      title: "ĐƠN HÀNG ĐÃ ĐẶT",
      type: "website",
      url: window.location.href
    })
  }
  getFullAddress(order: Order):string {
    return `${order.address}, ${order.province.name}, ${order.district.name}, ${order.ward.name}`
  }
  ngOnInit(): void {
  }

}
