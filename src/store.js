import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import isDarkReducer from './slices/is-dark-slice';
import isFirstTimeReducer from './slices/is-first-time-slice';

const isDarkPersistConfig = {
  key: "isDark",
  storage
};

const isFirstTimePersistConfig = {
  key: "isFirstTime",
  storage
};

const rootReducer = combineReducers(
  {
    isDarkRdc: isDarkReducer,
    isFirstTimeRdc: isFirstTimeReducer
  }
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
  {
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk]
  }
);

export const persistor = persistStore(store);
