import managementApi from "./shopApi";
import { IGetMarkaResponse } from "../../../../types/Management/Marka";
import shopApi from "./shopApi";
import { IShopResponse } from "../../../../types/Shop/IShop";

export const shopEndpoints = shopApi.injectEndpoints({
  endpoints: (builder) => ({
    getShop: builder.query<IShopResponse, any>({
      query: (arg) => ({
        url: `market`,
        method: "GET",
      }),
      providesTags: ["shop"],
    }),
  }),
});

export const { useGetShopQuery } = shopEndpoints;
