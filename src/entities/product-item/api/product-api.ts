import { productService, ProductSort, ProductWithItems } from '@/entities';
import { rootApi } from '@/shared/api';

export const productApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ProductWithItems[], ProductSort>({
      queryFn: async (sortData) => await productService.getProducts(sortData),
    }),
  }),
});

export const {
  endpoints: { getProducts },
} = productApi;
export const { useGetProductsQuery } = productApi;
