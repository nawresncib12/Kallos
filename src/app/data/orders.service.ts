import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { FetcherService } from '../helpers/fetcher/fetcher.service';
import { ExtractData, OrdersResponse } from './types';
import { CartElement } from '../helpers/cart/cart.service';
import Order from '../model/Order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private readonly fetcherService: FetcherService) {
    this.getOrders().subscribe();
  }

  getOrders() {
    return this.fetcherService.get<ExtractData<OrdersResponse>>('orders').pipe(
      tap((response) => {
        this.orders_subject$.next(response.data);
      })
    );
  }

  orders_subject$ = new BehaviorSubject<ExtractData<OrdersResponse>>([]);
  orders$ = this.orders_subject$.asObservable();
  getOrderById(id: number) {
    return this.fetcherService.get(`orders/${id}`);
  }

  formatCartElements(cartElement: CartElement[]) {
    return cartElement.map((el) => ({
      productId: el.product.id,
      quantity: el.amount,
    }));
  }

  createOrder(address: string, userId: number, cart: CartElement[]) {
    return this.fetcherService
      .post<Order>('orders', {
        orderItems: this.formatCartElements(cart),
        user: { id: userId },
        shippingAddress: address,
      })
      .pipe(
        tap((response) => {
          this.orders_subject$.next([
            ...this.orders_subject$.value,
            response.data,
          ]);
        })
      );
  }

  cancelOrder(order: Order) {
    console.log(
      '🚀 ~ file: orders.service.ts:40 ~ OrdersService ~ cancelOrder ~ order',
      order
    );
    return this.fetcherService
      .post<Order>(`orders/${order.id}/cancel`, {})
      .pipe(
        tap((response) => {
          this.getOrders().subscribe();
        })
      );
  }
}
