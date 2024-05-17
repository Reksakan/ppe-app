import  { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BASE_URL}),
    reducerPath: "adminApi",
    tagTypes: [
        "Overview",
    ],
    endpoints: (build) => ({
        
        getTrendsList: build.query({
            query: () => "ppi/overview",
            providesTags: ["Overview"],
        })
    })
})

export const {
    useGetTrendsListQuery,
} = api;
