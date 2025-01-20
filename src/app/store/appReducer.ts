import { combineReducers } from "@reduxjs/toolkit";
import { postsApi } from "../../shared/api/postsApi";
import { commentsApi } from "../../shared/api/commentsApi";
import { usersApi } from "../../shared/api/usersApi";

export const appReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
});
