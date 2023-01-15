import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { CatalogElementComponent } from './components/catalog/catalog-element/catalog-element.component';
import { CatalogModule } from './components/catalog/catalog.module';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './components/home/home.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorProvider } from './interceptors/token.interceptor';
import { CheckOutModule } from "./components/check-out/check-out.module";
import { DefaultProductImagePipe } from './pipes/default-product-image.pipe';
import { SharedModule } from './components/shared/shared.module';



@NgModule({
  declarations: [AppComponent, CatalogComponent, HomeComponent, CheckOutComponent, DefaultProductImagePipe],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    NoopAnimationsModule,
    CheckOutModule,
    HomeModule,
    SharedModule
  ],

})
export class AppModule { }
