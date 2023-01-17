import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Subject} from 'rxjs';
import {OrdersService} from 'src/app/data/orders.service';
import {OrderState} from "../../../enums/OrderState";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orderStates!: string[];

  constructor(private readonly ordersService: OrdersService) {
    this.orderStates = (Object.keys(OrderState) as (keyof typeof OrderState)[]).map(key => OrderState[key]);
  }

  statusFilter = new BehaviorSubject<string>(OrderState.ALL);
  filteredOrders$ = combineLatest([
    this.ordersService.orders$,
    this.statusFilter,
  ]).pipe(
    map(([orders, status]) => {
      if (status === OrderState.ALL) {
        return orders;
      }
      return orders.filter((order) => order.status === status);
    })
  );

  onChangeStatusFilter(status: string): void {
    this.statusFilter.next(status);
  }

  ngOnInit(): void {
  }
}
