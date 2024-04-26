import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { BannerComponent } from './home/banner/banner.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './home/main-page/main-page.component';
import { FeatursComponent } from './home/featurs/featurs.component';
import { CategoryWiseComponent } from './home/category-wise/category-wise.component';
import { OffersSectionComponent } from './home/offers-section/offers-section.component';
import { ScrollProductsComponent } from './home/scroll-products/scroll-products.component';
import { PromotionComponent } from './home/promotion/promotion.component';
import { BestSellerProductsComponent } from './home/best-seller-products/best-seller-products.component';
import { FactsOurAppComponent } from './home/facts-our-app/facts-our-app.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SignInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    MainPageComponent,
    FeatursComponent,
    CategoryWiseComponent,
    OffersSectionComponent,
    ScrollProductsComponent,
    PromotionComponent,
    BestSellerProductsComponent,
    FactsOurAppComponent,
    TestimonialComponent,
    ProductDetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
