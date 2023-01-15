import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [HeroComponent, AboutComponent],
    exports: [HeroComponent,AboutComponent],
    imports: [CommonModule, SharedModule]
})
export class HomeModule {}
