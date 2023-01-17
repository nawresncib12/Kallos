import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { FetcherService } from '../helpers/fetcher/fetcher.service';
import { ExtractData, OrdersResponse } from './types';
import { CartElement } from "../helpers/cart/cart.service";
import Order from "../model/Order";

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private readonly fetcherService: FetcherService) {
  }

  getOrders() {
    return this.fetcherService.get<ExtractData<OrdersResponse>>('orders');
  }

  orders$ = this.getOrders().pipe(map((response) => response.data));

  getOrderById(id: number) {
    return this.fetcherService.get(`orders/${id}`);
  }

  formatCartElements(cartElement: CartElement[]) {
    return cartElement.map((el) => {
      'productId': el.product.id,
        'quantity': el.amount
    })
  }


  createOrder(address: string, userId: number, cart: CartElement[]) {
    return this.fetcherService.post<Order>('orders', {
      'orderItems': this.formatCartElements(cart),
      'user': { 'id': userId },
      'shippingAddress': address

    })
  }

  cancelOrder(order: Order | null) {
    if (!order) return null
  }
}
