
import { configureStore } from '@reduxjs/toolkit';
import foldersReducer from './foldersSlice';

const store = configureStore({
  reducer: {
    folders: foldersReducer,
  },
});

export default store;
