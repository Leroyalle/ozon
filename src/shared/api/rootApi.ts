import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL as string,
  prepareHeaders: (headers) => {
    headers.set('Authorization', `${import.meta.env.VITE_GITHUB_TOKEN}`);
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
  endpoints: () => ({}),
});
