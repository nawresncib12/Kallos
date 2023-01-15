import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { AppTitleComponent } from './app-title/app-title.component';



@NgModule({
  declarations: [
    BreadcrumbsComponent,
    AppTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent,
    AppTitleComponent
  ]
})
export class SharedModule { }
