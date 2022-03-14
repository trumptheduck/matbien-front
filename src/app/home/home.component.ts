import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Autoplay} from 'swiper';

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
  constructor() {
    SwiperCore.use([Autoplay]);
  }
  ngOnInit(): void {
    this.parallaxBg = document.getElementById("parallaxbg");
    this.isInitialized = true;
  }

}
