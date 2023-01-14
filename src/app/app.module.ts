import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogElementComponent } from './components/catalog/catalog-element/catalog-element.component';
import { CatalogModule } from './components/catalog/catalog.module';
import { CatalogComponent } from './pages/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
