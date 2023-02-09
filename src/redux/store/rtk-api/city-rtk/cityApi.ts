import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "cityApi",
  baseQuery: baseQuery,
  tagTypes: ["City"],
  endpoints: () => ({}),
});
