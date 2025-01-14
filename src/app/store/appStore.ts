import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appReducer";
import { useDispatch, useSelector } from "react-redux";
import { postsApi } from "../../shared/api/postsApi";

export const appStore = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
});

type AppState = ReturnType<typeof appStore.getState>;
type AppDispatch = typeof appStore.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
