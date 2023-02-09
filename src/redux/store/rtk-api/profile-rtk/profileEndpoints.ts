import {IProfile, IProfileUpdate} from "./profile.type";
import profileApi from "./profileApi";

export const profileEndpoints = profileApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyProfile: builder.query<IProfile, any>({
            query: () => ({
                url: `profile/me`,
                method: "GET"
            }),
            providesTags: ["profile"],
        }),
        updateProfile: builder.mutation<IProfileUpdate, any>({
            query: (data) => ({
                url: `profile/worker`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["profile"],
        }),
    }),
});

export const {useGetMyProfileQuery, useUpdateProfileMutation} = profileEndpoints;
