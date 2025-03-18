import { ProductWithItems } from '@/entities';
import { rootApi } from '@/shared/api';
import { productService } from '../services';

export const productApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query<ProductWithItems | undefined, string | undefined>({
      queryFn: async (id) => {
        if (!id) return { data: undefined };
        return await productService.getById(id);
      },
      keepUnusedDataFor: 60 * 100,
    }),
  }),
});

export const {
  endpoints: { getProduct },
} = productApi;
export const { useGetProductQuery } = productApi;
