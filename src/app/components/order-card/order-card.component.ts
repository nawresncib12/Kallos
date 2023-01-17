import { Component, Input, OnInit } from '@angular/core';
import { ExtractData, OrdersResponse } from 'src/app/data/types';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() order: ExtractData<OrdersResponse>[number] | null = null;

  total = 0;
  ngOnChanges(): void {
    this.total =
      this.order?.orderItems.reduce((acc, item) => {
        return acc + (item.product ? item.product.price * item.quantity : 0);
      }, 0) ?? 0;
  }

  constructor() {}

  ngOnInit(): void {}
}
