import { configureStore } from '@reduxjs/toolkit';
import isDarkReducer from './slices/is-dark-slice';

export default configureStore(
  {
    reducer: {
      isDarkInv: isDarkReducer
    }
  }
);
