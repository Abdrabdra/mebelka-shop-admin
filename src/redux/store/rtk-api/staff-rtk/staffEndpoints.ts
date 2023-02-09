import staffApi from "./staffApi";
import {ICreateWorker, IOneStaffResponse, IStaffResponse} from "./staff.type";

export const homeEndpoints = staffApi.injectEndpoints({
  endpoints: (builder) => ({
    getStaff: builder.query<IStaffResponse[],string>({
      query: () => ({
        url: `profile/workers`,
        method:"GET"
      }),
      providesTags: ["staff"],
    }),
    getOneStaff: builder.query<IOneStaffResponse, number>({
      query: (id:number) => ({
        url: `profile/workers/${id}`,
        method:"GET"
      }),
      providesTags: ["staff"],
    }),
    createStaff: builder.mutation<any,any>({
      query: (formData) => ({
        url: `profile/workers`,
        method:"POST",
        body:{
          "building": formData.building,
          "apartment": formData.apartment,
          "index": formData.index,
          "phone": formData.phone,
          "password": formData.password,
          "firstName": formData.firstName,
          "secondName": formData.secondName,
          "middleName": formData.middleName,
          "iin": formData.iin,
          "date": formData.date,
          "cityId": formData.cityId,
          "street": formData.street,
          "floor": Number(formData.floor),

        }
      }),
      invalidatesTags: ["staff"],
    }),
    getMyBlockedProfiles: builder.query<any,string>({
      query: () => ({
        url: `profile/my-blockProfiles`,
        method:"GET"
      }),
      providesTags: ["staff"],
    }),
    blockWorker: builder.mutation<any,number>({
      query: (id) => ({
        url: `profile/block-worker/${id}`,
        method:"PUT"
      }),
      invalidatesTags: ["staff"],
    }),
    getMyBlockedProfilesById: builder.query<any,number|null>({
      query: (id) => ({
        url: `profile/my-blockProfiles/${id}`,
        method:"GET"
      }),
      providesTags: ["staff"],
    }),
  }),
});

export const { useGetStaffQuery, useGetOneStaffQuery, useCreateStaffMutation, useGetMyBlockedProfilesQuery, useBlockWorkerMutation, useGetMyBlockedProfilesByIdQuery } = homeEndpoints;
