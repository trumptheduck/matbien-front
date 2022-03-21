import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { OrdersComponent } from './orders/orders.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "display",
        component: DisplayComponent
      },
      {
        path: "blog",
        component: BlogComponent
      },
      {
        path: "post",
        component: PostComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "checkout",
        component: CheckoutComponent
      },
      {
        path: "orders",
        component: OrdersComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
