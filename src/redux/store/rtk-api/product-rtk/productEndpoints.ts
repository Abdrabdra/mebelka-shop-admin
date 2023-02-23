import { IAnnouncementsResponse } from "../../../../types/Announcement/Announcement.type";
import { IOneAnnouncement } from "../../../../types/Announcement/OneAnnouncement.type";
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

    updateProduct: builder.mutation<any, any>({
      query: (body) => ({
        url: "product",
        method: "POST",
        body,
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
} = productEndpoints;
