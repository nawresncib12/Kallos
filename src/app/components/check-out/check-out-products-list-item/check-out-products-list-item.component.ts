import {Component, Input, OnInit} from '@angular/core';
import {CartElement} from "../../../helpers/cart/cart.service";

@Component({
  selector: 'app-check-out-products-list-item',
  templateUrl: './check-out-products-list-item.component.html',
  styleUrls: ['./check-out-products-list-item.component.scss']
})
export class CheckOutProductsListItemComponent implements OnInit {

  @Input() cartElement: CartElement | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
