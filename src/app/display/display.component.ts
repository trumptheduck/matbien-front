import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from '../core/models/product.model';
import { Spec } from '../core/models/spec.model';
import { DataService } from '../core/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SeoService } from '../core/services/seo.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class DisplayComponent implements OnInit {
  item: Product = {
    _id: "",
    name: "",
    desc: "",
    info: "",
    ingredients: "",
    specs: [],
    usage: ""
  };
  amount: number = 1;
  spec: Spec|null = null;
  constructor(
    private data: DataService,
    public sanitizer: DomSanitizer,
    private snackbar: MatSnackBar,
    private router: Router,
    public seo: SeoService) {
    data.getProduct((item)=>{
      this.item = item;
      if (this.item.specs.length > 0) {
        this.spec = this.item.specs[0];
      }
      console.log(this.item);
    })
    seo.updateTitle("Mua Ngay Mật Biển");
    seo.updateDescription("Mật Biển là những giọt mật kết tinh những gì tinh túy nhất của biển. Sự ngọt ngào của cá cơm tươi hòa quyện với sự đậm đà của muối biển. Từng giọt sánh quyện, ngưng tụ sau 12 tháng ấp ủ. Dưới bàn tay của nghệ nhân, từng giọt nước mắm được đảm bảo về chất lượng và chín muồi về hương vị.");
    seo.updateOpenGraph({
      description: "Mật Biển là những giọt mật kết tinh những gì tinh túy nhất của biển. Sự ngọt ngào của cá cơm tươi hòa quyện với sự đậm đà của muối biển. Từng giọt sánh quyện, ngưng tụ sau 12 tháng ấp ủ. Dưới bàn tay của nghệ nhân, từng giọt nước mắm được đảm bảo về chất lượng và chín muồi về hương vị.",
      image: environment.apiUrl+'/static/photo/bg.jpg',
      title: "Mua Ngay Mật Biển",
      type: "website",
      url: window.location.href
    })
  }
  showSnackbar() {
    let snackBarRef = this.snackbar.open("Đã thêm sản phẩm vào giỏ hàng","Xem", { duration: 5000, panelClass: 'snackbar' });
     snackBarRef.onAction().subscribe(()=> {
       this.router.navigate(["checkout"])
     });
  }
  orderProduct() {
    if (this.spec) {
      let orderData = this.data.currentOrder.data;
      for (let i = 0; i < orderData.length; i ++) {
        let payload = orderData[i];
        if (payload.spec._id == this.spec?._id) {
          payload.amount += this.amount;
          this.data.saveOrderDraft();
          this.showSnackbar();
          return;
        }
      }
      this.data.currentOrder.data.push(
        {
          amount: this.amount,
          name: this.item.name,
          price: this.spec.price,
          product: this.item,
          spec: this.spec,
          total: 0,
          thumbnail: this.spec.images[0]
        }
      )
      this.data.saveOrderDraft();
      this.showSnackbar();
    }
  }
  ngOnInit(): void {
  }

}

