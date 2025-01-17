import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUser } from "../types/types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/users" }),
  endpoints: (builder) => ({
    getUserById: builder.query<TUser, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = usersApi;
