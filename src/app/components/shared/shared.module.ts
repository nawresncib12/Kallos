import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { AppTitleComponent } from './app-title/app-title.component';
import { ButtonComponent } from './button/button.component';
import { ScrollDownButtonComponent } from './scroll-down-button/scroll-down-button.component';
import { HoverClassDirective } from './directives/hover-class.directive';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    AppTitleComponent,
    ButtonComponent,
    ScrollDownButtonComponent,
    HoverClassDirective  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent,
    AppTitleComponent,ButtonComponent,ScrollDownButtonComponent
  ]
})
export class SharedModule { }
