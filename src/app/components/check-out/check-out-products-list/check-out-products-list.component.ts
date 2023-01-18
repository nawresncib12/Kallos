import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CartElement, CartService } from '../../../helpers/cart/cart.service';

@Component({
  selector: 'app-check-out-products-list',
  templateUrl: './check-out-products-list.component.html',
  styleUrls: ['./check-out-products-list.component.scss'],
})
export class CheckOutProductsListComponent implements OnInit, OnDestroy {
  private sub: any;

  @Input() showCheckout: boolean = true;
  cart: CartElement[] = [];
  shippingCost: number = 12.99;
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.sub = this.cartService.cartElements$.subscribe((data) => {
      this.cart = data;
      this.total = this.cart.reduce((acc, curr) => {
        return acc + curr.product.price * curr.amount;
      }, 0);
    });
  }

  clearCart() {
    this.cartService.clearCart();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
