import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CoreState {
  theme: "dark" | "light";
}

const initialState: CoreState = {
  theme: "light",
};

export const coreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = coreSlice.actions;
