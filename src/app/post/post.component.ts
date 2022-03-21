import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../core/models/post.model';
import { ApiService } from '../core/services/api.service';

interface LayoutData {
  name: string,
  elem: HTMLElement
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit, AfterViewInit {
  post: Post = {
    _id: '',
    author: {
      fullname: ''
    },
    content: '',
    desc: '',
    thumbnail: '',
    timestamp: '',
    title: '',
  }
  content: string = '';
  layout: LayoutData[] = [];
  @ViewChild('contentDiv') contentRef: any;
  constructor(
    public sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router,
    private Api: ApiService) {
    this.route.queryParams
      .subscribe(params => {
        if (params.id === undefined) {
          this.router.navigate(['blog']);
        }
        this.Api.get("/api/post/"+params.id).subscribe({
          next: (res)=>{
            this.post = res;
            var html = document.createElement( 'section' );
            html.innerHTML = this.post.content;
            let index = 0;
            html.querySelectorAll("h2").forEach(elem => {
              if (elem.textContent) {
                elem.id = "app-post-layout-id-"+index;
                elem.classList.add("app-post-header")
                index++;
                this.layout.push({
                  elem: elem,
                  name: elem.textContent
                })
              }
            });
            console.log(html);
            this.content = html.innerHTML;
          },
          error: ()=> {
            this.router.navigate(['blog']);
          }
        })
      }
    );
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    // let index = 0;
    // let html = this.contentRef.nativeElement as HTMLElement;
    // html.querySelectorAll("h2").forEach(elem => {
    //   if (elem.textContent) {
    //     elem.id = "layout"+index;
    //     index++;
    //     this.layout.push({
    //       elem: elem,
    //       name: elem.textContent
    //     })
    //     console.log(elem);
    //   }
    // });
    // this.cd.detectChanges();
  }
  scrollTo(index: number) {
    document.getElementById("app-post-layout-id-"+index)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
