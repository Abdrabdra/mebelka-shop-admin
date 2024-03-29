import managementApi from "./managementApi";
import { IGetMarkaResponse } from "../../../../types/Management/Marka";
import {
  IProductColor,
  IProductIFrame,
} from "../../../../types/Management/IProductInfo";

export const managementEndpoints = managementApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<IGetMarkaResponse, any>({
      query: (arg) => ({
        url: `category`,
        params: { parentId: arg?.parentId, page: 1, limit: 200 },
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    createCategory: builder.mutation<
      any,
      { categoryId?: number; title: string }
    >({
      query: (body) => ({
        url: "category",
        method: "POST",
        body,
      }),
      invalidatesTags: ["category"],
    }),
    deleteCategory: builder.mutation<any, { id: number }>({
      query: (arg) => ({
        url: `category/${arg.id}`,
        method: "DELETE",
      }),
    }),

    getProductColor: builder.query<IProductColor[], any>({
      query: () => ({
        url: `product-info/color`,
        params: { page: 1, limit: 200 },
        method: "GET",
      }),
      providesTags: ["product-info-color"],
    }),
    getProductDecor: builder.query<IProductIFrame[], any>({
      query: () => ({
        url: `product-info/decor`,
        params: {
          page: 1,
          limit: 200,
        },
        method: "GET",
      }),
      providesTags: ["product-info-decor"],
    }),
    getProductFrame: builder.query<IProductIFrame[], any>({
      query: () => ({
        url: `product-info/frame`,
        method: "GET",
        params: {
          page: 1,
          limit: 200,
        },
      }),
      providesTags: ["product-info-frame"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,

  useGetProductColorQuery,
  useGetProductDecorQuery,
  useGetProductFrameQuery,
} = managementEndpoints;
