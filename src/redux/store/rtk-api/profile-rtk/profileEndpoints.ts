import {
  IMarket,
  IMarketUpdate,
  IProfile,
  IProfileUpdate,
} from "./profile.type";
import profileApi from "./profileApi";

export const profileEndpoints = profileApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query<IProfile, any>({
      query: () => ({
        url: `profile/me`,
        method: "GET",
      }),
      providesTags: ["profile"],
    }),

    updateProfile: builder.mutation<IProfileUpdate, any>({
      query: (body) => ({
        url: `profile`,
        method: "PUT",
        body: {
          ...body,
          dayOfBirth: 0,
          monthOfBirth: 0,
          yearOfBirth: 0,
        },
      }),
      invalidatesTags: ["profile"],
    }),

    getMyMarket: builder.query<IMarket, { userId: number }>({
      query: (arg) => ({
        url: `market`,
        method: "GET",
        params: arg,
      }),
      providesTags: ["market"],
    }),
    updateMarket: builder.mutation<
      string,
      { marketId: number | string; body: IMarketUpdate }
    >({
      query: (arg) => ({
        url: `market/${arg.marketId}`,
        method: "PUT",
        body: {
          ...arg.body,
        },
      }),
      invalidatesTags: ["market"],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useUpdateProfileMutation,
  useGetMyMarketQuery,
  useUpdateMarketMutation,
} = profileEndpoints;
