import { createSlice } from '@reduxjs/toolkit';

export const isDarkSlice = createSlice(
  {
    name: "isDark",
    initialState: {
      isDark: false
    },
    reducers: {
      isDarkInv: state => {
        state.isDark = !state.isDark;
      },
      isDarkSet: (state, action) => {
        state.isDark = action.payload;
      }
    }
  }
);

export const { isDarkInv, isDarkSet } = isDarkSlice.actions;

export default isDarkSlice.reducer;
