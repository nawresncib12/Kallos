import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {CheckOutModule} from "../check-out/check-out.module";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CheckOutModule,
    SharedModule,
    RouterModule
  ],

})
export class CartModule {
}
