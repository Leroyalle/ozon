import { productItemService, ProductSort, ProductItemWithProduct } from '@/entities';
import { rootApi } from '@/shared/api';

export const productItemApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ProductItemWithProduct[], ProductSort>({
      queryFn: async (sortData) => await productItemService.getProducts(sortData),
      keepUnusedDataFor: 60 * 100,
      providesTags: ['Product'],
    }),
  }),
});

export const {
  endpoints: { getProducts },
} = productItemApi;
export const { useGetProductsQuery } = productItemApi;
