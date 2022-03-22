import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Post } from '../core/models/post.model';
import { DataService } from '../core/services/data.service';
import { SeoService } from '../core/services/seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  constructor(private router: Router, private data: DataService, public seo: SeoService) {
    this.data.getPosts((posts)=>{
      this.posts = posts;
      console.log(posts)
    })
    seo.updateTitle("Câu Chuyện Của Mật Biển - Góc chia sẻ - Blog");
    seo.updateDescription("Mật Biển là những giọt mật kết tinh những gì tinh túy nhất của biển. Sự ngọt ngào của cá cơm tươi hòa quyện với sự đậm đà của muối biển. Từng giọt sánh quyện, ngưng tụ sau 12 tháng ấp ủ. Dưới bàn tay của nghệ nhân, từng giọt nước mắm được đảm bảo về chất lượng và chín muồi về hương vị.");
    seo.updateOpenGraph({
      description: "Mật Biển là những giọt mật kết tinh những gì tinh túy nhất của biển. Sự ngọt ngào của cá cơm tươi hòa quyện với sự đậm đà của muối biển. Từng giọt sánh quyện, ngưng tụ sau 12 tháng ấp ủ. Dưới bàn tay của nghệ nhân, từng giọt nước mắm được đảm bảo về chất lượng và chín muồi về hương vị.",
      image: environment.apiUrl+'/static/photo/bg.jpg',
      title: "Câu Chuyện Của Mật Biển - Góc chia sẻ - Blog",
      type: "website",
      url: window.location.href
    })
  }

  ngOnInit(): void {
  }
  viewPost(id: string='') {
    this.router.navigate(["/post"], {queryParams: {"id": id}});
  }
}
