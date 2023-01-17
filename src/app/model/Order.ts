import OrderItem from "./OrderItem";
import {OrderState} from "../enums/OrderState";

export default class Order {
  id?: number;

  orderItems: OrderItem[];

  orderDate: Date;

  status: OrderState;

  shippingAddress: string;

  note: string;

  constructor(order: Partial<Order> = {}) {
    this.id = order.id;
    this.orderItems = order.orderItems?.map(orderItem => new OrderItem(orderItem)) ?? [];
    this.orderDate = order.orderDate ? new Date(order.orderDate) : new Date();
    this.status = order.status ?? OrderState.Pending;
    this.shippingAddress = order.shippingAddress ?? "";
    this.note = order.note ?? ""
  }
};
