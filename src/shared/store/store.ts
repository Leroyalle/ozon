import { configureStore } from '@reduxjs/toolkit';
import { rootApi } from '../api';

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
