import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './home/main-page/main-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: MainPageComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
