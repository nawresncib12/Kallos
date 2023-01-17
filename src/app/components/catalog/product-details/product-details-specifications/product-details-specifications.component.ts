import {Component, OnInit} from '@angular/core';
import {ProductDetailsService} from "../../../../pages/product-details/product-details.service";
import {CartService} from "../../../../helpers/cart/cart.service";
import {Product} from "../../../../model/Product";
import {ToasterService} from "../../../../helpers/toaster/toaster.service";

@Component({
  selector: 'app-product-details-specifications',
  templateUrl: './product-details-specifications.component.html',
  styleUrls: ['./product-details-specifications.component.scss']
})
export class ProductDetailsSpecificationsComponent {

  constructor(public productDetailsService: ProductDetailsService, public cartService: CartService, private toaster: ToasterService) {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.toaster.toaster.success('product added to cart')
  }

  removeFromCart(product: Product) {
    this.cartService.deleteProduct(product.id);
    this.toaster.toaster.success('product removed from cart')
  }

}
