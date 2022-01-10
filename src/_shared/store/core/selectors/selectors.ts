import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "_shared/store";

const selectState = (state: RootState) => state;
const selectCore = createSelector(selectState, (state) => state.core);
export const themeSelector = createSelector(selectCore, (state) => state.theme);
