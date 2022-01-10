import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "news/api/newsApi";
import { coreSlice } from "./core";

export const store = configureStore({
  reducer: {
    core: coreSlice.reducer,
    news: newsApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
