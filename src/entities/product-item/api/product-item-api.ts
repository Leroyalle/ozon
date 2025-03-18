import { productItemService, ProductSort, ProductWithItems } from '@/entities';
import { rootApi } from '@/shared/api';

export const productItemApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ProductWithItems[], ProductSort>({
      queryFn: async (sortData) => await productItemService.getProducts(sortData),
      keepUnusedDataFor: 60 * 100,
    }),
  }),
});

export const {
  endpoints: { getProducts },
} = productItemApi;
export const { useGetProductsQuery } = productItemApi;
