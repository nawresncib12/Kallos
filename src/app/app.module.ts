import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogElementComponent } from './components/catalog/catalog-element/catalog-element.component';
import { CatalogModule } from './components/catalog/catalog.module';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './components/home/home.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ProductDetailsComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule,
    NoopAnimationsModule,
    SharedModule,
    HomeModule
  ],
})
export class AppModule {}
