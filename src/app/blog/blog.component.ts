import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../core/models/post.model';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  constructor(private router: Router, private data: DataService) {
    this.data.getPosts((posts)=>{
      this.posts = posts;
      console.log(posts)
    })
  }

  ngOnInit(): void {
  }
  viewPost(id: string='') {
    this.router.navigate(["/post"], {queryParams: {"id": id}});
  }
}
