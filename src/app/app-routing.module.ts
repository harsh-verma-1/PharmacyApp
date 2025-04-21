import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SeeProductDetailsComponent } from './component/see-product-details/see-product-details.component';
import { GoToCartComponent } from './component/go-to-cart/go-to-cart.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';

const routes: Routes = [
  {path:"products", component:ProductsComponent},
  {path:"contact-us", component:ContactUsComponent},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"go-to-cart",component:GoToCartComponent},
  {path:"getProduct/:id",component:SeeProductDetailsComponent},
  {path:"addToCart/:id",component:GoToCartComponent},
  {path:"profile",component:ProfileComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:'**',component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes , { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
