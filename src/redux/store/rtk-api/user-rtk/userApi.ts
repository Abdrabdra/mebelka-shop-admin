import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery,
  tagTypes: ["user"],
  endpoints: () => ({}),
});
