import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

@NgModule({
    declarations: [HeroComponent, AboutComponent, ProductCategoryComponent],
    exports: [HeroComponent,AboutComponent,ProductCategoryComponent],
    imports: [CommonModule, SharedModule]
})
export class HomeModule {}
