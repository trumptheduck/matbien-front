import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DisplayComponent } from './display/display.component';
import { BlogComponent } from './blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { SwiperModule } from 'swiper/angular';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { MatExpansionModule } from '@angular/material/expansion';
import { BlogOverviewComponent } from './components/blog-overview/blog-overview.component';
import { BannerSmallComponent } from './components/banner-small/banner-small.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrencyformatPipe } from './core/pipes/currencyformat.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessDialogComponent } from './components/dialogs/success-dialog/success-dialog.component';
import { MatButtonModule } from "@angular/material/button"
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ImagecdnPipe } from './core/pipes/imagecdn.pipe';
import { UnixtodatePipe } from './core/pipes/unixtodate.pipe';
import { OrdersComponent } from './orders/orders.component';
import { OrderstatusPipe } from './core/pipes/orderstatus.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DisplayComponent,
    BlogComponent,
    BlogOverviewComponent,
    BannerSmallComponent,
    PostComponent,
    AboutComponent,
    CheckoutComponent,
    CurrencyformatPipe,
    SuccessDialogComponent,
    ImagecdnPipe,
    UnixtodatePipe,
    OrdersComponent,
    OrderstatusPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    SwiperModule,
    AnimateOnScrollModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
