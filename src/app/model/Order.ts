import {OrderStatus} from "../data/types";
import OrderItem from "./OrderItem";

export default class Order {
  id?: number;

  orderItems: OrderItem[];

  orderDate: Date;

  status: OrderStatus;

  shippingAddress: string;

  note: string;

  constructor(order: Partial<Order> = {}) {
    this.id = order.id;
    this.orderItems = order.orderItems?.map(orderItem => new OrderItem(orderItem)) ?? [];
    this.orderDate = order.orderDate ? new Date(order.orderDate) : new Date();
    this.status = order.status ?? OrderStatus.Pending;
    this.shippingAddress = order.shippingAddress ?? "";
    this.note = order.note ?? ""
  }
};
