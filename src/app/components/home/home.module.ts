import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ValuesComponent } from './values/values.component';
import { CatalogComponent } from 'src/app/pages/catalog/catalog.component';
import { CatalogModule } from '../catalog/catalog.module';

@NgModule({
  declarations: [
    HeroComponent,
    AboutComponent,
    ProductCategoryComponent,
    ValuesComponent,
  ],
  exports: [
    HeroComponent,
    AboutComponent,
    ProductCategoryComponent,
    ValuesComponent,
  ],
  imports: [CommonModule, SharedModule, CatalogModule],
})
export class HomeModule {}
