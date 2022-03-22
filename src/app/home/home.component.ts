import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import SwiperCore, { Autoplay} from 'swiper';
import { SeoService } from '../core/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isInitialized: boolean = false;
  parallaxBg:any;
  @HostListener('window:scroll', ['$event']) 
  onScroll(event:any) {
    if (this.isInitialized) {
      var _background = this.parallaxBg as HTMLElement;
      var scrolltotop = document.scrollingElement?.scrollTop??0;
      var xvalue = "center";
      var factor = 0.5;
      var yvalue = scrolltotop * factor;
      _background.style.backgroundPosition = xvalue + " " + yvalue + "px";
    }
  }
  constructor(public seo: SeoService) {
    SwiperCore.use([Autoplay]);
    seo.updateTitle("Mật Biển - Nước Mắm Cốt Cá Cơm Cao Cấp");
    seo.updateDescription("Mật Biển là những giọt mật kết tinh những gì tinh túy nhất của biển. Sự ngọt ngào của cá cơm tươi hòa quyện với sự đậm đà của muối biển. Từng giọt sánh quyện, ngưng tụ sau 12 tháng ấp ủ. Dưới bàn tay của nghệ nhân, từng giọt nước mắm được đảm bảo về chất lượng và chín muồi về hương vị.");
    seo.updateOpenGraph({
      description: "Mật Biển là những giọt mật kết tinh những gì tinh túy nhất của biển. Sự ngọt ngào của cá cơm tươi hòa quyện với sự đậm đà của muối biển. Từng giọt sánh quyện, ngưng tụ sau 12 tháng ấp ủ. Dưới bàn tay của nghệ nhân, từng giọt nước mắm được đảm bảo về chất lượng và chín muồi về hương vị.",
      image: environment.apiUrl+'/static/photo/bg.jpg',
      title: "Mật Biển - Nước Mắm Cốt Cá Cơm Cao Cấp",
      type: "website",
      url: window.location.href
    })
  }
  ngOnInit(): void {
    this.parallaxBg = document.getElementById("parallaxbg");
    this.isInitialized = true;
  }

}
