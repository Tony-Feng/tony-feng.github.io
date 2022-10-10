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
      },
      set: (state, action) => {
        state.isDark = action.payload;
      }
    }
  }
);

export const { inv, set } = isDarkSlice.actions;

export default isDarkSlice.reducer;
