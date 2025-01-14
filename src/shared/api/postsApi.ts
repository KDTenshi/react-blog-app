import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TPostItem } from "../types/types";

export const postsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/posts" }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<TPostItem[], void>({
      query: () => "/",
    }),
    getPostById: builder.query<TPostItem, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;
