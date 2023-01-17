import {Component, OnInit} from '@angular/core';
import {ProductDetailsService} from "../../../../pages/product-details/product-details.service";

@Component({
  selector: 'app-product-details-specifications',
  templateUrl: './product-details-specifications.component.html',
  styleUrls: ['./product-details-specifications.component.scss']
})
export class ProductDetailsSpecificationsComponent {

  constructor(public productDetailsService: ProductDetailsService) {}

  addToCart() {
    // add to cart
  }

}
