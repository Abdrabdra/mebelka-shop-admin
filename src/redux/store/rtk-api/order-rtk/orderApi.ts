import { createApi } from "@reduxjs/toolkit/query/react"
import { baseQuery } from "../rtkApi"

export default createApi({
	reducerPath: "orderApi",
	baseQuery: baseQuery,
	tagTypes: ["order"],
	endpoints: () => ({})
})
