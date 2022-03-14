import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-small',
  templateUrl: './banner-small.component.html',
  styleUrls: ['./banner-small.component.scss']
})
export class BannerSmallComponent implements OnInit {
  @Input("src") src:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
