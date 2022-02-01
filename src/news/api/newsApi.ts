import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewsResponse } from "news/types";

export const newsApi = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/",
  }),
  endpoints: (builder) => ({
    getAllNews: builder.query<NewsResponse, string>({
      query: (posts) => "@crtdaniele",
    }),
  }),
});

export const { useGetAllNewsQuery } = newsApi;
