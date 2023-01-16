import { Component, Input, OnInit } from '@angular/core';
import Category from 'src/app/enums/Category';
import { mockUser, Order, OrderStatus } from 'src/app/pages/profile/mock';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  @Input() orders: Order[] = mockUser.orders;

  filteredOrders: Order[] = this.orders;

  statusFilter = 'ALL';

  onChangeStatusFilter(status: string): void {
    this.statusFilter = status;
    this.filteredOrders = this.orders.filter((order) => {
      return this.statusFilter === 'ALL' || order.status === this.statusFilter;
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
