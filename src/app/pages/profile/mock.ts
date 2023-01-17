import {
  ExtractData,
  OrdersResponse,
  ProfileResponse,
} from 'src/app/data/types';
import {Role} from "../../enums/Role";
import {OrderState} from "../../enums/OrderState";
import Category from "../../enums/Category";

export const mockUser: ExtractData<ProfileResponse> = {
  id: 1,
  avatar: 7,
  firstName: 'Flen',
  lastName: 'Fouleni',
  role: Role.ADMIN,
  address: '1234 Main St',
  phone: '123-456-7890',
  email: 'flen@gmail.com',
  orders: [
    {
      id: 1,
      shippingAddress: '1234 Main St',
      note: 'Please deliver ASAP',
      orderDate: new Date(),
      status: OrderState.Pending,
    },
    {
      id: 1,
      orderDate: new Date(),
      shippingAddress: '1234 Main St',
      note: 'Please deliver ASAP',
      status: OrderState.Delivered,
    },
  ],
};

export const mockOrders: ExtractData<OrdersResponse> = [
  {
    orderDate: new Date(),
    shippingAddress: '1234 Main St',
    note: 'Please deliver ASAP',
    status: OrderState.Pending,
    id: 1,
    orderItems: [
      {
        id: 1,
        quantity: 1,
        product: {
          id: 1,
          name: 'Product 1',
          details: 'Product 1 details',
          images: ['https://picsum.photos/200/300'],
          description: 'Product 1 description',
          price: 100,
          category: Category.JEWELRY,
        },
      },
      {
        id: 1,
        quantity: 5,
        product: {
          id: 1,
          details: 'Product 2 details',
          images: ['https://picsum.photos/200/300'],
          name: 'Blue Lipstick',
          description: 'Product 2 description',
          price: 34,
          category: Category.MAKEUP,
        },
      },
    ],
  },
];
