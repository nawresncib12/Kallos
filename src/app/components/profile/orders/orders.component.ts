import { Component, Input, OnInit } from '@angular/core';
import { mockOrders, mockUser } from 'src/app/pages/profile/mock';
import Order from "../../../model/Order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  @Input() orders: Order[] = mockOrders;

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
