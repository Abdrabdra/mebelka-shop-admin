import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "announcementApi",
  baseQuery: baseQuery,
  tagTypes: ["announcements"],
  endpoints: () => ({}),
});
