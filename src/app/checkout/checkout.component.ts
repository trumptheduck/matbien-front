import { Component, OnInit } from '@angular/core';
import { SuccessDialogComponent } from '../components/dialogs/success-dialog/success-dialog.component';
import { Address, Order, OrderData } from '../core/models/order.model';
import { AddressService } from '../core/services/address.service';
import { DataService } from '../core/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { SeoService } from '../core/services/seo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public provinces: Address[] = [];
  public districts: Address[] = [];
  public wards: Address[] = [];
  public order: Order = this.data.currentOrder;
  public addressPlaceholder: Address = {code: "-1", name: ""};


  constructor(private address: AddressService, private data: DataService, public dialog: MatDialog, public seo: SeoService) {
    this.address.getProvinces((provinces)=>{
      this.provinces = provinces;
    });
    seo.updateTitle("GIỎ HÀNG");
    seo.updateDescription("Mật Biển là những giọt mật kết tinh những gì tinh túy nhất của biển. Sự ngọt ngào của cá cơm tươi hòa quyện với sự đậm đà của muối biển. Từng giọt sánh quyện, ngưng tụ sau 12 tháng ấp ủ. Dưới bàn tay của nghệ nhân, từng giọt nước mắm được đảm bảo về chất lượng và chín muồi về hương vị.");
    seo.updateOpenGraph({
      description: "Mật Biển là những giọt mật kết tinh những gì tinh túy nhất của biển. Sự ngọt ngào của cá cơm tươi hòa quyện với sự đậm đà của muối biển. Từng giọt sánh quyện, ngưng tụ sau 12 tháng ấp ủ. Dưới bàn tay của nghệ nhân, từng giọt nước mắm được đảm bảo về chất lượng và chín muồi về hương vị.",
      image: environment.apiUrl+'/static/photo/bg.jpg',
      title: "GIỎ HÀNG",
      type: "website",
      url: window.location.href
    })
  }
  onProvinceChange() {
    this.address.getDistrictsByCode(this.order.province.code,(districts)=>{
      this.districts = districts;
    })
  }
  onDistrictChange() {
    this.address.getWardsByCode(this.order.district.code,(wards)=>{
      this.wards = wards;
    })
  }

  calculateTotal(data:OrderData[], percentage: number = 100) {
    let total = 0;
    data.forEach(payload => {
      total += payload.spec.price*payload.amount;
    })
    return total*(percentage/100);
  }
  submit() {
    this.data.createOrder((data)=>{
      console.log(data);
      this.data.currentOrder = this.data.placeholderOrder;
      this.data.deleteOrderDraft();
      this.openSuccessDialog();
    });
  }
  ngOnInit(): void {
    
  }
  changeAmount(data:OrderData,value:number) {
    if (value < 0) {
      data.amount = (data.amount + value>=1)?data.amount + value:1
    } else {
      data.amount += value;
    }
    this.saveDraft();
  }
  saveDraft() {
    this.data.saveOrderDraft();
  }
  openSuccessDialog() {
    const dialogRef = this.dialog.open(SuccessDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
