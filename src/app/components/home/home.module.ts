import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [HeroComponent],
    exports: [HeroComponent],
    imports: [CommonModule, SharedModule]
})
export class HomeModule {}
