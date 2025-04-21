import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ProductsComponent } from './component/products/products.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SearchProductPipe } from './pipes/search-product.pipe';
import { GoToCartComponent } from './component/go-to-cart/go-to-cart.component';
import { SeeProductDetailsComponent } from './component/see-product-details/see-product-details.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ContactUsComponent,
    ProductsComponent,
    PageNotFoundComponent,
    SearchProductPipe,
    // GoToCartComponent,
    SeeProductDetailsComponent,
    ProfileComponent,
    ForgetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
