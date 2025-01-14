import { combineReducers } from "@reduxjs/toolkit";
import { postsApi } from "../../shared/api/postsApi";

export const appReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
});
