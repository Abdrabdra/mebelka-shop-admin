import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "regionApi",
  baseQuery: baseQuery,
  tagTypes: ["region"],
  endpoints: () => ({}),
});
