import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_SECRET, API_URL } from '../constants';

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    headers.set('Authorization', API_SECRET);
    headers.set('apikey', API_KEY);
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, {
  maxRetries: 0,
});

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Catalog'],
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
