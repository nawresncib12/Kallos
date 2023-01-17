import {Product} from "./Product";

export default class OrderItem {
  id?: number;

  quantity: number;

  product: Product;

  constructor(orderItem: Partial<OrderItem> = {}) {
    this.id = orderItem.id;
    this.quantity = orderItem.quantity ?? 0;
    this.product = new Product(orderItem.product)
  }
};
