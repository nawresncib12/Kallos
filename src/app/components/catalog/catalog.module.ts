import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogElementComponent } from './catalog-element/catalog-element.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CatalogSidebarComponent } from './catalog-sidebar/catalog-sidebar.component';


@NgModule({
  declarations: [
    CatalogElementComponent,
    CatalogSidebarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    CatalogElementComponent,
    CatalogSidebarComponent
  ]
})
export class CatalogModule { }
