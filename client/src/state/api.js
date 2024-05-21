import  { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BASE_URL}),
    reducerPath: "adminApi",
    tagTypes: [
        "Overview",
        "Graphs",
    ],
    endpoints: (build) => ({
        getTrendsList: build.query({
            query: () => "ppi/overview",
            providesTags: ["Overview"],
        }),
        getPpiList: build.query({
            query: () => "ppi/graphs",
            providesTags: ["Graphs"],
        })
    })
})

export const { useGetTrendsListQuery, useGetPpiListQuery} = api;
