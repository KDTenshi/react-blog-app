import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TPostItem } from "../types/types";

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/posts" }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<TPostItem[], number>({
      query: (page) => ({
        url: "/",
        params: {
          _limit: 9,
          _start: (page - 1) * 9,
        },
      }),
    }),
    getPostById: builder.query<TPostItem, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;
