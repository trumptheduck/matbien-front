import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/models/post.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss']
})
export class BlogOverviewComponent implements OnInit {
  posts: Post[] = [];
  constructor(private router: Router, private data: DataService) {
    this.data.getPosts((posts)=>{
      this.posts = posts.slice(0, 3);;
      console.log(this.posts)
    })
  }

  ngOnInit(): void {
  }
  viewPost(id: string='') {
    this.router.navigate(["/post"], {queryParams: {"id": id}});
  }
}
