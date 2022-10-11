import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import isDarkReducer from './is-dark-slice';
import isFirstTimeReducer from './is-first-time-slice';
import userInfoReducer from './user-info-slice';

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["userInfoRdc"]
};

const rootReducer = combineReducers(
  {
    userInfoRdc: userInfoReducer,
    isDarkRdc: isDarkReducer,
    isFirstTimeRdc: isFirstTimeReducer
  }
);

export default persistReducer(rootPersistConfig, rootReducer);
