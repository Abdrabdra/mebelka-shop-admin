import { IGetOneProfile, IGetProfiles, IRole } from "./user.type";
import userApi from "./userApi";

export const userEndpoints = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfiles: builder.query<IGetProfiles, object>({
      query: (filters) => ({
        url: `/profile/list`,
        params: {
          ...filters,
        },
      }),
      providesTags: ["user"],
    }),
    getOneProfile: builder.query<IGetOneProfile, string>({
      query: (userId) => ({
        url: `/profile/user/${userId}`,
      }),
      providesTags: ["user"],
    }),
    getRole: builder.query<IRole[], string>({
      query: () => ({
        url: `/user/check`,
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetProfilesQuery, useGetOneProfileQuery, useGetRoleQuery } =
  userEndpoints;

//useGetUserProfileQuery
