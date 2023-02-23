import announcementApi from "./announcementApi";

import { IAnnouncementsResponse } from "../../../../types/Announcement/Announcement.type";
import { Status } from "../../../../types/Enums";

export const announcementEndpoints = announcementApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnnouncements: builder.query<IAnnouncementsResponse, object>({
      query: (arg) => {
        return {
          url: `/product`,
          params: { ...arg },
        };
      },
      providesTags: ["announcements"],
    }),

    getOneAnnouncement: builder.query<any, string>({
      query: (id) => ({
        url: `/announcement/one/${id}`,
      }),
      providesTags: ["announcements"],
    }),

    createAnnouncement: builder.mutation<any, FormData>({
      query: (body) => ({
        url: `/announcement`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["announcements"],
    }),

    updateStatusAnnouncement: builder.mutation<
      any,
      { id: number; body: { status: Status } }
    >({
      query: (arg) => ({
        url: `/announcement/update-status/${arg.id}`,
        method: "PUT",
        body: arg.body,
      }),
      invalidatesTags: ["announcements"],
    }),
  }),
});

export const {
  useGetAnnouncementsQuery,
  useGetOneAnnouncementQuery,
  useCreateAnnouncementMutation,
  useUpdateStatusAnnouncementMutation,
} = announcementEndpoints;
