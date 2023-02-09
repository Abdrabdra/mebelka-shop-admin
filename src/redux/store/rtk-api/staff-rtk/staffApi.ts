import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "staffApi",
  baseQuery: baseQuery,
  tagTypes: ["staff"],
  endpoints: () => ({}),
});
