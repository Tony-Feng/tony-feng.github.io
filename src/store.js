import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import isDarkReducer from './slices/is-dark-slice';

const persistConfig = {
  key: "isDark",
  storage
};

const rootReducer = combineReducers(
  {
    isDarkRdc: isDarkReducer
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
