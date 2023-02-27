import {
  IAnnouncementsResponse,
  IUpdateProduct,
} from "../../../../types/Announcement/Announcement.type";
import { IOneAnnouncement } from "../../../../types/Announcement/IOneAnnouncement";
import productApi from "./productApi";

export const productEndpoints = productApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IAnnouncementsResponse, object>({
      query: (arg) => {
        return {
          url: `/product`,
          params: { ...arg },
        };
      },
      providesTags: ["product"],
    }),

    getOneProduct: builder.query<IOneAnnouncement, string>({
      query: (id) => ({
        url: `/product/${id}`,
      }),
      providesTags: ["product"],
    }),

    createProduct: builder.mutation<any, any>({
      query: (body) => ({
        url: "product",
        method: "POST",
        body,
      }),
      invalidatesTags: ["product"],
    }),

    updateProduct: builder.mutation<any, { productId: number; body: FormData }>(
      {
        query: (arg) => ({
          url: `product/${arg.productId}`,
          method: "PUT",
          body: arg.body,
        }),
        invalidatesTags: ["product"],
      }
    ),

    deleteProductPhoto: builder.mutation<any, any>({
      query: (arg) => ({
        url: `product/photo/${arg}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),

    deleteProductColor: builder.mutation<
      any,
      { colorId: number; productId: number }
    >({
      query: (arg) => ({
        url: `product/color/${arg.colorId}/product/${arg.productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    deleteProductFrame: builder.mutation<
      any,
      { frameId: number; productId: number }
    >({
      query: (arg) => ({
        url: `product/frame/${arg.frameId}/product/${arg.productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetOneProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,

  useDeleteProductPhotoMutation,
  useDeleteProductColorMutation,
  useDeleteProductFrameMutation,
} = productEndpoints;
