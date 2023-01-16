import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckOutProductsListComponent} from './check-out-products-list/check-out-products-list.component';
import {CheckOutProductsListItemComponent} from './check-out-products-list-item/check-out-products-list-item.component';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    CheckOutProductsListComponent,
    CheckOutProductsListItemComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule
  ],
  exports: [
    CheckOutProductsListComponent,
    CheckOutProductsListItemComponent
  ]
})
export class CheckOutModule {
}
