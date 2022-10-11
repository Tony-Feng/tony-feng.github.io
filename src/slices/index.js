import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';
import isDarkReducer from './is-dark-slice';
import isFirstTimeReducer from './is-first-time-slice';
import userInfoReducer from './user-info-slice';

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["userInfo"]
};

const userInfoPersistConfig = {
  key: "userInfo",
  storage: storageSession
};

const rootReducer = combineReducers(
  {
    userInfoRdc: persistReducer(userInfoPersistConfig, userInfoReducer),
    other: otherReducer
  }
);


// export default combineReducers(
//   {
//     isDarkRdc: isDarkReducer,
//     isFirstTimeRdc: isFirstTimeReducer,
//     userInfoRdc: userInfoReducer
//   }
// );
