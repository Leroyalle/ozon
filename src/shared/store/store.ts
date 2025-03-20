import { configureStore } from '@reduxjs/toolkit';
import { rootApi } from '../api';
import { cartSummarySlice } from '@/features';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
    cartSummarySlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
