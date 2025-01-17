import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TCommentItem } from "../types/types";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/comments" }),
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query<TCommentItem[], number>({
      query: (postId) => ({
        url: "/",
        params: {
          postId,
        },
      }),
    }),
  }),
});

export const { useGetCommentsByPostIdQuery } = commentsApi;
