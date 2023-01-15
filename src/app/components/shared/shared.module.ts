import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { AppTitleComponent } from './app-title/app-title.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    AppTitleComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent,
    AppTitleComponent,ButtonComponent
  ]
})
export class SharedModule { }
