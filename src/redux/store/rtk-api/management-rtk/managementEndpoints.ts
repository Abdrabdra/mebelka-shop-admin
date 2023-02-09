import managementApi from "./managementApi";
import { IGetMarkaResponse } from "../../../../types/Management/Marka";

export const managementEndpoints = managementApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<IGetMarkaResponse, any>({
      query: (arg) => ({
        url: `category`,
        params: { parentId: arg.parentId },
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

    getProductColor: builder.query<IGetMarkaResponse, any>({
      query: () => ({
        url: `product-info/color`,
        method: "GET",
      }),
      providesTags: ["product-info"],
    }),
    createProductColor: builder.mutation<any, { title: string; value: string }>(
      {
        query: (body) => ({
          url: "product-info/color",
          method: "POST",
          body,
        }),
        invalidatesTags: ["product-info"],
      }
    ),
  }),
});

export const {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} = managementEndpoints;
