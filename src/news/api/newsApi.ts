import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewsResponse } from "news/types";

export const newsApi = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllNews: builder.query<NewsResponse, string>({
      query: (posts) => "posts",
    }),
  }),
});

export const { useGetAllNewsQuery } = newsApi;
