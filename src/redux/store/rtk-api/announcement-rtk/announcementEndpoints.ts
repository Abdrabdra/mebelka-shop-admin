import announcementApi from "./announcementApi";

import { IAnnouncementsResponse } from "../../../../types/Announcement/Announcement.type";
import { Status } from "../../../../types/Enums";
import { IOneAnnouncement } from "../../../../types/Announcement/IOneAnnouncement";

export const announcementEndpoints = announcementApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnnouncements: builder.query<IAnnouncementsResponse, object>({
      query: (arg) => {
        return {
          url: `/product/admin`,
          params: { ...arg },
        };
      },
      providesTags: ["announcements"],
    }),

    getOneAnnouncement: builder.query<IOneAnnouncement, string>({
      query: (id) => ({
        url: `/product/${id}`,
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

    updateAnnouncement: builder.mutation<any, FormData>({
      query: (body) => ({
        url: `/announcement`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["announcements"],
    }),

    updateStatusAnnouncement: builder.mutation<any, number>({
      query: (arg) => ({
        url: `/product/confirm/${arg}`,
        method: "PUT",
      }),
      invalidatesTags: ["announcements"],
    }),
  }),
});

export const {
  useGetAnnouncementsQuery,
  useGetOneAnnouncementQuery,
  useCreateAnnouncementMutation,
  useUpdateAnnouncementMutation,
  useUpdateStatusAnnouncementMutation,
} = announcementEndpoints;
