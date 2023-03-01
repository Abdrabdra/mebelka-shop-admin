import { OrderStatus } from "./OrderStatus.enum";

export interface IMarketOrderItem {
  id: number;
  totalPrice: number;
  status: OrderStatus;
  items: IOrderItemOne[];
}

export interface IOrderItemOne {
  id: number;
  qty: number;
  totalPrice: number;
  product: {
    id: number;
    title: string;
    price: number;
    discount: number;
    description: string;
    confirm: boolean;
  };
}
