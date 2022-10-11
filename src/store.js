import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import persistedReducer from './slices';

export const store = configureStore(
  {
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk]
  }
);

export const persistor = persistStore(store);
