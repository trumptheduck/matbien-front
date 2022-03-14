import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDocked: boolean = true;
  isDrawerVisible: boolean = false;
  constructor() { }
  @HostListener('window:scroll', ['$event']) 
  onScroll(event:any) {
    if (window.scrollY == 0) {
      this.isDocked = true;
    } else {
      this.isDocked = false;
    }
  }
  ngOnInit(): void {
  }

}
