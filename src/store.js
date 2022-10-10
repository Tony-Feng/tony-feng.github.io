import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import isDarkReducer from './slices/is-dark-slice';

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, isDarkReducer);

export const store = configureStore(
  {
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk]
  }
);

export const persistor = persistStore(store);
