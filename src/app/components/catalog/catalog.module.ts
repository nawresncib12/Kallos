import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogElementComponent } from './catalog-element/catalog-element.component';



@NgModule({
  declarations: [
    CatalogElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatalogElementComponent
  ]
})
export class CatalogModule { }
