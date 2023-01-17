import ApiResponse from './ApiResponse';
import { Product } from '../model/Product';
import Order from '../model/Order';
import User from '../model/User';

export type ExtractData<T> = T extends ApiResponse<infer U> ? U : never;

export type ProfileResponse = ApiResponse<
  User & { orders: Omit<Order, 'orderItems'>[] }
>;
export type ProfileResponseData = ExtractData<ProfileResponse>;

export type ProfileUpdateResponse = ApiResponse<User>;
export type ProfileUpdatePasswordResponse = ApiResponse<User>;
export type ProfileUpdatePasswordResponseData =
  ExtractData<ProfileUpdatePasswordResponse>;
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
