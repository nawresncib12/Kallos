import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogElementComponent } from './catalog-element/catalog-element.component';
import { ProductImagesComponent } from './product-details/product-images/product-images.component';
import { ProductDetailsSpecificationsComponent } from './product-details/product-details-specifications/product-details-specifications.component';
import { ProductImagesPreviewerComponent } from './product-details/product-images-previewer/product-images-previewer.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    CatalogElementComponent,
    ProductImagesComponent,
    ProductDetailsSpecificationsComponent,
    ProductImagesPreviewerComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [
    CatalogElementComponent,
    ProductImagesComponent,
    ProductDetailsSpecificationsComponent,
  ]
})
export class CatalogModule { }
