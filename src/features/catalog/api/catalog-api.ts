import { rootApi } from '@/shared';
import { ProductWithItems } from '../types';
import { catalogService } from '../services';

export const catalogApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ProductWithItems[], void>({
      queryFn: async () => await catalogService.getProducts(),
    }),
  }),
});

export const {
  endpoints: { getProducts },
} = catalogApi;
export const { useGetProductsQuery } = catalogApi;
