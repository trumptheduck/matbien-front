import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss']
})
export class BlogOverviewComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  viewPost(id: string='') {
    this.router.navigate(["/home/post"]);
  }
}
