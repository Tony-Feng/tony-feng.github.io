import { createSlice } from '@reduxjs/toolkit';

export const isDarkSlice = createSlice(
  {
    name: "isDark",
    initialState: {
      isDark: false
    },
    reducers: {
      inv: state => {
        state.isDark = !state.isDark;
      }
    }
  }
);

export const { inv } = isDarkSlice.actions;

export default isDarkSlice.reducer;
