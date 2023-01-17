import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ValuesComponent } from './values/values.component';

@NgModule({
    declarations: [HeroComponent, AboutComponent, ProductCategoryComponent, ValuesComponent],
    exports: [HeroComponent,AboutComponent,ProductCategoryComponent,ValuesComponent],
    imports: [CommonModule, SharedModule]
})
export class HomeModule {}
