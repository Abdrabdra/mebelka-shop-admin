import announcementApi from "./announcementApi";

import {
  IAdminAnnouncementResponse,
  IAnnouncementsResponse,
  ILikeAnnouncement,
} from "../../../../types/Announcement/Announcement.type";
import { IOneAnnouncementResponse } from "../../../../types/Announcement/OneAnnouncement.type";
import { Status } from "../../../../types/Enums";

export const announcementEndpoints = announcementApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnnouncements: builder.query<IAnnouncementsResponse, object>({
      query: (arg) => {
        return {
          url: `/announcement`,
          params: { ...arg },
        };
      },
      providesTags: ["announcements"],
    }),
    getAnnouncementsAdmin: builder.query<IAdminAnnouncementResponse, object>({
      query: (arg) => {
        return {
          url: `/announcement/admin`,
          params: { ...arg },
        };
      },
      providesTags: ["announcements"],
    }),

    likeAnnouncement: builder.mutation<string, ILikeAnnouncement>({
      query: (body) => ({
        url: `/like`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["announcements"],
    }),
    getOneAnnouncement: builder.query<IOneAnnouncementResponse, string>({
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
  useGetAnnouncementsAdminQuery,

  useLikeAnnouncementMutation,
  useGetOneAnnouncementQuery,
  useCreateAnnouncementMutation,

  useUpdateStatusAnnouncementMutation,
} = announcementEndpoints;
