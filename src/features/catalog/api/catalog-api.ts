import { rootApi } from '@/shared/api';
import { Product } from '../types';
import { ApiRoutesEnum } from '@/shared';

export const catalogApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => ({
        url: ApiRoutesEnum.PRODUCT,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  endpoints: { getProducts },
} = catalogApi;
export const { useGetProductsQuery } = catalogApi;
