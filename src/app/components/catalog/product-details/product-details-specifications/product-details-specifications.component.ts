import {Component, OnInit} from '@angular/core';
import {ProductDetailsService} from "../../../../pages/product-details/product-details.service";
import {CartService} from "../../../../helpers/cart/cart.service";
import {Product} from "../../../../model/Product";

@Component({
  selector: 'app-product-details-specifications',
  templateUrl: './product-details-specifications.component.html',
  styleUrls: ['./product-details-specifications.component.scss']
})
export class ProductDetailsSpecificationsComponent {

  constructor(public productDetailsService: ProductDetailsService, public cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: Product) {
    this.cartService.deleteProduct(product.id);
  }

}
