import { IProfile, IProfileUpdate } from "./profile.type";
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
  }),
});

export const { useGetMyProfileQuery, useUpdateProfileMutation } =
  profileEndpoints;
