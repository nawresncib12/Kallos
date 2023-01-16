import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { FetcherService } from '../helpers/fetcher/fetcher.service';
import { ExtractData, OrdersResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private readonly fetcherService: FetcherService) {}

  getOrders() {
    return this.fetcherService.get<ExtractData<OrdersResponse>>('orders');
  }

  orders$ = this.getOrders().pipe(map((response) => response.data));

  getOrderById(id: number) {
    return this.fetcherService.get(`orders/${id}`);
  }
}