import {
  ICreateOrder,
  IGetOrderResponse,
  IOneOrderResponse,
} from "../../../../types/Order/IOrder";
import orderApi from "./orderApi";

export const orderEndpoints = orderApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrder: builder.query<IGetOrderResponse, any>({
      query: (arg) => ({
        url: `order/market`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),

    getOneOrder: builder.query<IOneOrderResponse, any>({
      query: (arg) => ({
        url: `order/one/${arg}`,
        method: "GET",
      }),
      providesTags: ["order"],
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

export const { useCreateOrderMutation, useGetOneOrderQuery, useGetOrderQuery } =
  orderEndpoints;
