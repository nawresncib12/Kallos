export enum Category {
  JEWELRY = 'JEWELRY',
  SCULPTURE = 'SCULPTURE',
  CANDLES = 'CANDLES',
  MAKEUP = 'MAKEUP',
}
export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}
export enum OrderStatus {
  Pending = 'Pending',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled',
}

export type Product = {
  id: number;

  name: string;

  description: string;

  price: number;

  // enum Category Column
  category: Category;

  orderItems?: OrderItem[];
};
type OrderItem = {
  id: number;
  quantity: number;
  order?: Order;
  product: Product;
};

export type Order = {
  id: number;

  orderItems: OrderItem[];

  orderDate: Date;

  status: OrderStatus;

  user?: User;
};

export type User = {
  id: number;

  avatar: number;

  firstName: string;

  lastName: string;

  address?: string;

  phone?: string;

  role: Role;

  email: string;

  createdAt: Date;

  updatedAt: Date;

  orders: Order[];
};

export const mockUser: User = {
  id: 1,
  avatar: 1,
  firstName: 'Flen',
  lastName: 'Fouleni',
  role: Role.ADMIN,
  address: '1234 Main St',
  phone: '123-456-7890',
  email: 'flen@gmail.com',
  createdAt: new Date(),
  updatedAt: new Date(),
  orders: [
    {
      id: 1,
      orderItems: [
        {
          id: 1,
          quantity: 1,
          product: {
            id: 1,
            name: 'Product 1',
            description: 'Product 1 description',
            price: 100,
            category: Category.JEWELRY,
          },
        },
      ],
      orderDate: new Date(),
      status: OrderStatus.Pending,
    },
  ],
};
