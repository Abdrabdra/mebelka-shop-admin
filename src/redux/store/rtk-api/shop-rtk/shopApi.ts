import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "shopApi",
  baseQuery: baseQuery,
  tagTypes: ["shop"],
  endpoints: () => ({}),
});
