import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../helpers/cart/cart.service";

@Component({
  selector: 'app-check-out-products-list',
  templateUrl: './check-out-products-list.component.html',
  styleUrls: ['./check-out-products-list.component.scss']
})
export class CheckOutProductsListComponent implements OnInit {

  constructor(public cartService: CartService) {

  }

  ngOnInit(): void {
  }

}
