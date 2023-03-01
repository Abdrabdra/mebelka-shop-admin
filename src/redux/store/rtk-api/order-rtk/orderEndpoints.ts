import { IMarketOrderResponse } from "../../../../types/Order/IMarketOrder";
import { IMarketOrderItem } from "../../../../types/Order/IMarketOrderItem";
import {
  ICreateOrder,
  IGetOrderResponse,
  IOneOrderResponse,
} from "../../../../types/Order/IOrder";
import { OrderStatus } from "../../../../types/Order/OrderStatus.enum";
import orderApi from "./orderApi";

export const orderEndpoints = orderApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrder: builder.query<IMarketOrderResponse, any>({
      query: (arg) => ({
        url: `order/market`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),

    getOneOrder: builder.query<IMarketOrderItem, any>({
      query: (arg) => ({
        url: `order/market/item/${arg}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),

    updateOrder: builder.mutation<any, { id: number; status: OrderStatus }>({
      query: (arg) => ({
        url: `order/market/item/${arg.id}`,
        method: "PUT",
        body: { status: arg.status },
      }),
      invalidatesTags: ["order"],
    }),

    createOrder: builder.mutation<any, ICreateOrder>({
      query: (body) => ({
        url: "order",
        method: "POST",
        body,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOneOrderQuery,
  useUpdateOrderMutation,
  useGetOrderQuery,
} = orderEndpoints;
