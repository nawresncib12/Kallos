import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogElementComponent } from './catalog-element/catalog-element.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    CatalogElementComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    CatalogElementComponent
  ]
})
export class CatalogModule { }
