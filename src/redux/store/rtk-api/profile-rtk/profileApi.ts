import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../rtkApi";

export default createApi({
    reducerPath: "profileApi",
    baseQuery: baseQuery,
    tagTypes: ["profile"],
    endpoints: () => ({}),
});
