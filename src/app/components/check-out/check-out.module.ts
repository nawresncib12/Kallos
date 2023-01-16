import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckOutProductsListComponent} from './check-out-products-list/check-out-products-list.component';
import {CheckOutProductsListItemComponent} from './check-out-products-list-item/check-out-products-list-item.component';
import {MatBadgeModule} from '@angular/material/badge';
import { CheckOutConfirmationComponent } from './check-out-confirmation/check-out-confirmation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CheckOutProductsListComponent,
    CheckOutProductsListItemComponent,
    CheckOutConfirmationComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CheckOutProductsListComponent,
    CheckOutProductsListItemComponent,
    CheckOutConfirmationComponent
  ]
})
export class CheckOutModule {
}
