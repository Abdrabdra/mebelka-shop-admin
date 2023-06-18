import { ICreateRegion, IGetRegion } from "../../../../types/Management/Region";
import cityApi from "./cityApi";

export const cityEndpoints = cityApi.injectEndpoints({
  endpoints: (builder) => ({
    getCity: builder.query<IGetRegion[], any>({
      query: () => ({
        url: `region`,
        params: {
          page: 1,
          limit: 200,
        },
      }),
      providesTags: ["City"],
    }),

    createCity: builder.mutation<any, ICreateRegion>({
      query: (data) => ({
        url: `region`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["City"],
    }),
    createCityIn: builder.mutation<any, ICreateRegion>({
      query: (data) => ({
        url: `region/city`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["City"],
    }),

    deleteCity: builder.mutation<any, { id: number }>({
      query: (arg) => ({
        url: `region/${arg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["City"],
    }),
    deleteCityUnder: builder.mutation<any, { id: number }>({
      query: (arg) => ({
        url: `region/city/${arg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["City"],
    }),
  }),
});

export const {
  useGetCityQuery,

  useCreateCityMutation,
  useCreateCityInMutation,

  useDeleteCityMutation,
  useDeleteCityUnderMutation,
} = cityEndpoints;
