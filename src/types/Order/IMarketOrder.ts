import { OrderStatus } from "./OrderStatus.enum";

export interface IMarketOrderResponse {
  data: IMarketOrderOne[];
  count: number;
}

export interface IMarketOrderOne {
  id: number;
  totalPrice: number;
  status: OrderStatus;
  items: [
    {
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
        images: [
          {
            id: number;
            imageUrl: string;
          }
        ];
      };
    }
  ];
}
