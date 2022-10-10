import { createSlice } from '@reduxjs/toolkit';

export const isFirstTimeSlice = createSlice(
  {
    name: "isFirstTime",
    initialState: {
      isFirstTime: true
    },
    reducers: {
      isFirstTimeSet: (state, action) => {
        state.isFirstTime = action.payload;
      }
    }
  }
);

export const { isFirstTimeSet } = isFirstTimeSlice.actions;

export default isFirstTimeSlice.reducer;
