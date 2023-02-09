import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DEV_API } from "../../../api";
// import { $api } from '../../api/index';

export const baseQuery = fetchBaseQuery({
  baseUrl: DEV_API,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    } else {
      headers.set("Authorization", "NO HEADER");
    }
    return headers;
  },
});
