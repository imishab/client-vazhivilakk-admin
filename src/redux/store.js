import { configureStore } from '@reduxjs/toolkit';
import { adminApi } from './api/adminApi';
import adminReducer from './slices/adminSlice';

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});

