export type ExtractData<T> = T extends ApiResponse<infer U> ? U : never;

export type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};
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

  details: string | null;

  images: string[];

  price: number;

  category: Category;
};
type OrderItem = {
  id: number;
  quantity: number;
  product: Product;
};

export type Order = {
  id: number;

  orderItems: OrderItem[];

  orderDate: Date;

  status: OrderStatus;

  shippingAddress: string;

  note: string;
};

export type User = {
  id: number;

  avatar?: number;

  firstName: string;

  lastName: string;

  address?: string;

  phone?: string;

  role: Role;

  email: string;

  createdAt: Date;

  updatedAt: Date;
};

export type ProfileResponse = ApiResponse<
  User & { orders: Omit<Order, 'orderItems'>[] }
>;
export type ProfileUpdateResponse = ApiResponse<User>;
export type ProfileUpdatePasswordResponse = ApiResponse<User>;
export type ProductsResponse = ApiResponse<Product[]>;
export type ProductByIdResponse = ApiResponse<Product>;
export type LikeProductResponse = ApiResponse<{
  id: number;
  message: 'liked' | 'unliked';
}>;
export type LikedProductsResponse = ApiResponse<Product[]>;

export type OrdersResponse = ApiResponse<Order[]>;
export type CreateOrderResponse = ApiResponse<Order & { user: { id: number } }>;
export type CancelOrderResponse = CreateOrderResponse;
