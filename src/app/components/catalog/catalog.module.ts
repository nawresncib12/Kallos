import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogElementComponent } from './catalog-element/catalog-element.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CatalogSidebarComponent } from './catalog-sidebar/catalog-sidebar.component';
import { ProductImagesComponent } from './product-details/product-images/product-images.component';
import { ProductDetailsSpecificationsComponent } from './product-details/product-details-specifications/product-details-specifications.component';
import { ProductImagesPreviewerComponent } from './product-details/product-images-previewer/product-images-previewer.component';
import { MatDividerModule } from '@angular/material/divider';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CatalogElementComponent,
    CatalogSidebarComponent,
    ProductImagesComponent,
    ProductDetailsSpecificationsComponent,
    ProductImagesPreviewerComponent
  ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatDividerModule,
        SharedModule

    ],
  exports: [
    CatalogElementComponent,
    ProductImagesComponent,
    ProductDetailsSpecificationsComponent,
    ProductImagesPreviewerComponent,
    CatalogSidebarComponent
  ]

})
export class CatalogModule { }
