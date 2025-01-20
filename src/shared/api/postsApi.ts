import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TPostItem } from "../types/types";

export const postsApi = createApi({
  reducerPath: "postsAPi",
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
    getPostsByUserId: builder.query<TPostItem[], number>({
      query: (userId) => ({
        url: "/",
        params: {
          userId,
        },
      }),
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery, useGetPostsByUserIdQuery } = postsApi;
