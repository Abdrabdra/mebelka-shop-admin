import productApi from "./productApi";

export const productEndpoints = productApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query<any, any>({
      query: (arg) => ({
        url: `product`,
        // params: { parentId: arg?.parentId },
        method: "GET",
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
  }),
});

export const { useGetProductQuery, useCreateProductMutation } =
  productEndpoints;
