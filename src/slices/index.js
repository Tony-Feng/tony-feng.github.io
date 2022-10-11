import { combineReducers } from '@reduxjs/toolkit';
import isDarkReducer from './is-dark-slice';
import isFirstTimeReducer from './is-first-time-slice';
import userInfoReducer from './user-info-slice';

export default combineReducers(
  {
    isDarkRdc: isDarkReducer,
    isFirstTimeRdc: isFirstTimeReducer,
    userInfoRdc: userInfoReducer
  }
);
