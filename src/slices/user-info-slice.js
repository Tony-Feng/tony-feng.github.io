import { createSlice } from '@reduxjs/toolkit';
import UserInfo from '../assets/info.json';

export const userInfoSlice = createSlice(
  {
    name: "userInfo",
    initialState: {
      userInfo: UserInfo
    },
    reducers: {} // read only, use `persistor.purge()` in `store.js` or `localStorage.clear()` in browser to clean up everything
  }
);

export default userInfoSlice.reducer;
