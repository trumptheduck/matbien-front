import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SeoService } from '../core/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public seo: SeoService) {
    seo.updateTitle("Sự Kết Tinh Của Mật Biển");
    seo.updateDescription("Mật Biển là những giọt mật kết tinh những gì tinh túy nhất của biển. Sự ngọt ngào của cá cơm tươi hòa quyện với sự đậm đà của muối biển. Từng giọt sánh quyện, ngưng tụ sau 12 tháng ấp ủ. Dưới bàn tay của nghệ nhân, từng giọt nước mắm được đảm bảo về chất lượng và chín muồi về hương vị.");
    seo.updateOpenGraph({
      description: "Mật Biển là những giọt mật kết tinh những gì tinh túy nhất của biển. Sự ngọt ngào của cá cơm tươi hòa quyện với sự đậm đà của muối biển. Từng giọt sánh quyện, ngưng tụ sau 12 tháng ấp ủ. Dưới bàn tay của nghệ nhân, từng giọt nước mắm được đảm bảo về chất lượng và chín muồi về hương vị.",
      image: environment.apiUrl+'/static/photo/bg.jpg',
      title: "Sự Kết Tinh Của Mật Biển",
      type: "website",
      url: window.location.href
    })
  }

  ngOnInit(): void {
    
  }

}
