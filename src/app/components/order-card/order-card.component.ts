import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/pages/profile/mock';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() order: Order | null = null;

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
