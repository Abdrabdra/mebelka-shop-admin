import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "productApi",
  baseQuery: baseQuery,
  tagTypes: [
    "product",
  ],
  endpoints: () => ({}),
});
