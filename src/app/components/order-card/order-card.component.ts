import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom, Subscription } from 'rxjs';
import { ExtractData, OrdersResponse } from 'src/app/data/types';
import { OrdersService } from '../../data/orders.service';
import { ToasterService } from '../../helpers/toaster/toaster.service';

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

  constructor(
    private orderService: OrdersService,
    private toasterService: ToasterService
  ) {}

  ngOnInit(): void {}

  cancelOrder() {
    if (!this.order) return;
    const confirm = window.confirm(
      'are you sure that you want to cancel this order'
    );
    if (confirm) {
      lastValueFrom(this.orderService.cancelOrder(this.order))
        .then((response) => {
          this.toasterService.toastApiResponse(response);
          this.orderService.getOrders().subscribe();
        })
        .catch((err) => {
          this.toasterService.toaster.error(err.error.message);
        });
    }
  }
}
