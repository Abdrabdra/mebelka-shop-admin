import { OrderStatus } from "./OrderStatus.enum";

export interface ICreateOrder {
  cityId: number;
  apartment: string;
  building: string;
  address: string;
  phone: string;
}

export interface IGetOrderResponse {
  data: [
    {
      id: number;
      apartment: string;
      building: string;
      address: string;
      phone: string;
      totalPrice: number;
      marketOrders: IMarketOrders[];
    }
  ];
  count: number;
}

export interface IMarketOrders {
  id: number;
  totalPrice: number;
  status: OrderStatus;
  items: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  qty: number;
  totalPrice: number;
  product: IOrderItemProduct;
}

export interface IOrderItemProduct {
  id: number;
  title: string;
  price: number;
  discount: number;
  description: string;
}

// OneOrder
export interface IOneOrderResponse {
  id: number;
  apartment: string;
  building: string;
  address: string;
  phone: string;
  totalPrice: number;
  marketOrders: IOneOrderMarket[];
}

export interface IOneOrderMarket {
  id: number;
  totalPrice: number;
  status: OrderStatus;
  items: OrderItem[];
  market: IOrderMarket[];
}

export interface IOrderMarket {
  id: number;
  title: string;
  street: string;
  phone: string;
  imageUrl: string;
  email: string;
}

export interface IOrderImage {
  id: number;
  imageUrl: string;
}

export interface OrderItem {
  id: number;
  qty: number;
  totalPrice: number;
  product: IOneOrderItemProduct;
}

export interface IOneOrderItemProduct {
  id: number;
  title: string;
  price: number;
  discount: number;
  description: string;
  images: IOrderImage[];
}
