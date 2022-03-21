import { Component, HostListener, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDocked: boolean = true;
  isDrawerVisible: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
  });
  }
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
  scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }
  onActivate() {

  }
}
