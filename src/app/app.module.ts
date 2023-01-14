import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { CatalogElementComponent } from './components/catalog/catalog-element/catalog-element.component';
import { CatalogModule } from './components/catalog/catalog.module';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorProvider } from './interceptors/token.interceptor';
import {CheckOutModule} from "./components/check-out/check-out.module";
import { DefaultProductImagePipe } from './pipes/default-product-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CheckOutComponent,
    CatalogComponent,
    DefaultProductImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    NoopAnimationsModule,
    CheckOutModule
  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
