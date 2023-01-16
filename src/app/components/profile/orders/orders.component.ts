import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Subject } from 'rxjs';
import { OrdersService } from 'src/app/data/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  constructor(private readonly ordersService: OrdersService) {}
  statusFilter = new BehaviorSubject<string>('ALL');
  filteredOrders$ = combineLatest([
    this.ordersService.orders$,
    this.statusFilter,
  ]).pipe(
    map(([orders, status]) => {
      if (status === 'ALL') {
        return orders;
      }
      return orders.filter((order) => order.status === status);
    })
  );

  onChangeStatusFilter(status: string): void {
    this.statusFilter.next(status);
  }

  ngOnInit(): void {}
}
