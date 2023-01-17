import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartElement, CartService} from "../../../helpers/cart/cart.service";

@Component({
  selector: 'app-check-out-products-list',
  templateUrl: './check-out-products-list.component.html',
  styleUrls: ['./check-out-products-list.component.scss']
})
export class CheckOutProductsListComponent implements OnInit, OnDestroy {

  private sub: any;

  cart: CartElement[] = [];

  constructor(private cartService: CartService) {

  }


  ngOnInit(): void {
    this.sub = this.cartService.cartElements$.subscribe(
      data => {
        this.cart = data;
      }
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
