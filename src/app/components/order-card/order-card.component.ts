import { Component, Input, OnInit } from '@angular/core';
import { OrdersResponse } from 'src/app/data/types';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() order: OrdersResponse['data'][number] | null = null;

  total = 0;
  ngOnChanges(): void {
    this.total =
      this.order?.orderItems.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0) ?? 0;
  }

  constructor() {}

  ngOnInit(): void {}
}
