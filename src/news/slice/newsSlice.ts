import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NewsState {
  data: {
    title: string;
  }[];
}

const initialState: NewsState = {
  data: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;
