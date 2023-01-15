import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { CatalogModule } from './components/catalog/catalog.module';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './components/home/home.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorProvider } from './interceptors/token.interceptor';
import { CheckOutModule } from "./components/check-out/check-out.module";
import { DefaultProductImagePipe } from './pipes/default-product-image.pipe';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SharedModule } from './components/shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  providers: [TokenInterceptorProvider],
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductDetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CheckOutComponent,
    DefaultProductImagePipe
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    NoopAnimationsModule,
    CheckOutModule,
    SharedModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],

})
export class AppModule { }
